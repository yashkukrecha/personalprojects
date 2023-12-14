/*  Student information for assignment:
 *
 *  On OUR honor, Yash Kukrecha and Anirudh Prabhu, this programming assignment is OUR own work
 *  and WE have not provided this code to any other student.
 *
 *  Number of slip days used: 0
 *
 *  Student 1 (Student whose Canvas account is being used)
 *  UTEID: yk9475
 *  email address: ykukrecha@utexas.edu
 *  Grader name: Bersam
 *
 *  Student 2
 *  UTEID: app2432
 *  email address: anirudhpra5062@gmail.com
 *
 */

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class SimpleHuffProcessor implements IHuffProcessor {

    private IHuffViewer myViewer;
    private int[] counts; // frequencies
    private String[] map; // original vs the Huffman code
    private int header; // format
    private int bitsSaved; // how many bits saved
    private HuffmanTree tree; // tree of characters

    /**
     * Preprocess data so that compression is possible ---
     * count characters/create tree/store state so that
     * a subsequent call to compress will work. The InputStream
     * is <em>not</em> a BitInputStream, so wrap it int one as needed.
     * @param in is the stream which could be subsequently compressed
     * @param headerFormat a constant from IHuffProcessor that determines what kind of
     * header to use, standard count format, standard tree format, or
     * possibly some format added in the future.
     * @return number of bits saved by compression or some other measure
     * Note, to determine the number of
     * bits saved, the number of bits written includes
     * ALL bits that will be written including the
     * magic number, the header format number, the header to
     * reproduce the tree, AND the actual data.
     * @throws IOException if an error occurs while reading from the input file.
     */
    public int preprocessCompress(InputStream in, int headerFormat) throws IOException {
        header = headerFormat;
        counts = new int[IHuffConstants.ALPH_SIZE];

        // reading in frequencies and finding total bits used
        int originalBits = readFile(in);
        if (originalBits == -1) {
            return -1;
        }

        // creates the tree
        tree = new HuffmanTree(counts);
        TreeNode root = tree.getRoot();

        map = new String[IHuffConstants.ALPH_SIZE + 1];
        // use array because I put it through a recursive function
        int[] newBits = new int[1];

        // new bits counted here
        getMappings(map, root, "", newBits, counts);

        // once for magic number, once for type of format
        newBits[0] += (IHuffConstants.BITS_PER_INT * 2);

        // bits used change depending on SCF or STF
        final int BITS_PER_LEAF = 10;
        if (header == IHuffConstants.STORE_COUNTS) {
            newBits[0] += (IHuffConstants.BITS_PER_INT * IHuffConstants.ALPH_SIZE);
        } else {
            // 32 bits representing how many bits in tree implementation
            newBits[0] += IHuffConstants.BITS_PER_INT;
            newBits[0] += ((tree.numLeaves() * BITS_PER_LEAF) + tree.numInternalNodes());
        }

        // this is for the PEOF
        newBits[0] += map[map.length - 1].length();

        // bits saved
        bitsSaved = originalBits - newBits[0];
        myViewer.update("Original bits " + originalBits);
        myViewer.update("New bits " + newBits[0]);
        myViewer.update("Number of bits saved " + bitsSaved);
        return bitsSaved;
    }

    /**
     * Reads the original file and determines the frequencies for each value
     * @param in the input stream tied to the original file
     * @return the number of bits read
     * @throws IOException if error occurs while reading file
     */
    private int readFile(InputStream in) throws IOException {
        int originalBits = 0;
        int inbits = in.read();
        while (inbits != -1) {
            if (inbits >= counts.length) {
                myViewer.showError("Error occurred when reading from input file");
                return -1;
            }
            // add one to frequency for file and 8 for bits read
            originalBits += IHuffConstants.BITS_PER_WORD;
            counts[inbits]++;
            inbits = in.read();
        }
        in.close();
        return originalBits;
    }

    /**
     * Gets the patterns for each leaf node in the Huffman tree
     * @param map is the array mapping the original values to the Huffman codes
     * @param node is the current node
     * @param pattern is the current Huffman code built
     * @param newBits is the number of new bits being written
     * @param counts is the frequency of each value
     */
    public void getMappings(String[] map, TreeNode node, String pattern, int[] newBits,
            int[] counts) {

        if (node != null) {
            if (node.isLeaf()) {
                map[node.getValue()] = pattern;
                // bits used for this new pattern is pattern.length() * the # of times used
                if (node.getValue() != IHuffConstants.ALPH_SIZE) {
                    newBits[0] += (pattern.length() * counts[node.getValue()]);
                }
            } else {
                // keep going if it is not a leaf
                getMappings(map, node.getLeft(), pattern + "0", newBits, counts);
                getMappings(map, node.getRight(), pattern + "1", newBits, counts);
            }
        }
    }

    /**
	 * Compresses input to output, where the same InputStream has
     * previously been pre-processed via <code>preprocessCompress</code>
     * storing state used by this call.
     * <br> pre: <code>preprocessCompress</code> must be called before this method
     * @param in is the stream being compressed (NOT a BitInputStream)
     * @param out is bound to a file/stream to which bits are written
     * for the compressed file (not a BitOutputStream)
     * @param force if this is true create the output file even if it is larger than the input
     *              file.
     * If this is false do not create the output file if it is larger than the input file.
     * @return the number of bits written.
     * @throws IOException if an error occurs while reading from the input file or
     * writing to the output file.
     */
    public int compress(InputStream in, OutputStream out, boolean force) throws IOException {
        if (map == null) {
            throw new IOException("preprocessCompress was not called before compressing");
        }
        // if file is not really compressed, and we do not force, do not create
        if (bitsSaved < 0 && !force) {
            in.close();
            out.close();
            return 0;
        }
        myViewer.showMessage("Compressing file... ");
        // create file
        BitOutputStream output = new BitOutputStream(out);
        BitInputStream input = new BitInputStream(in);
        int newBits = 0;

        // writes magic number, whether it is SCF or STF, and then the header
        output.writeBits(IHuffConstants.BITS_PER_INT, IHuffConstants.MAGIC_NUMBER);
        output.writeBits(IHuffConstants.BITS_PER_INT, header);
        newBits += (IHuffConstants.BITS_PER_INT * 2);

        // write header data
        newBits += writeHeaderData(output);
        // write compressed data
        int compressedBits = compressingData(input, output);
        if (compressedBits == -1) {
            return -1;
        } else {
            newBits += compressedBits;
        }

        // padding
        int remainder = newBits % IHuffConstants.BITS_PER_WORD;
        if (remainder != 0) {
            output.writeBits(IHuffConstants.BITS_PER_WORD - remainder, 0);
        }
        output.close();

        // does not include padding
        return newBits;
    }

    /**
     * Writes the header data depending on STF or SCF
     * @param output place to write the data
     * @return the number of new bits written
     */
    private int writeHeaderData(BitOutputStream output) {
        final int BITS_PER_LEAF = 10;
        int newBits = 0;
        if (header == IHuffConstants.STORE_COUNTS) {
            // write the frequencies for each character
            for (int i = 0; i < IHuffConstants.ALPH_SIZE; i++) {
                output.writeBits(IHuffConstants.BITS_PER_INT, counts[i]);
            }
            newBits += (IHuffConstants.BITS_PER_INT * IHuffConstants.ALPH_SIZE);
        } else {
            int treeBits = ((tree.numLeaves() * BITS_PER_LEAF) + tree.numInternalNodes());
            newBits += treeBits;
            // write 32 bits representing how many bits in tree implementation
            output.writeBits(IHuffConstants.BITS_PER_INT, treeBits);
            // create tree
            tree.writePreorder(output);
        }
        return newBits;
    }

    /**
     * Writes the compressed data into the new file
     * @param input is the original data that needs to be compressed
     * @param output is the compressed data
     * @return the number of new bits written
     * @throws IOException if there is error reading the input file
     */
    private int compressingData(BitInputStream input, BitOutputStream output) throws IOException {
        int newBits = 0;
        int inbits = input.read();
        while (inbits != -1) {
            if (inbits >= map.length) {
                myViewer.showError("Error occurred when reading from input file.");
                return -1;
            }
            // write the Huff code to the file, one bit at a time
            String huffCode = map[inbits];
            for (int i = 0; i < huffCode.length(); i++) {
                output.writeBits(1, Integer.parseInt(huffCode.substring(i, i + 1)));
            }
            newBits += huffCode.length();

            // next set of bits
            inbits = input.read();
        }
        input.close();

        // writing out PEOF
        String peof = map[map.length - 1];
        for (int i = 0; i < peof.length(); i++) {
            output.writeBits(1, Integer.parseInt(peof.substring(i, i + 1)));
        }
        newBits += peof.length();
        return newBits;
    }

    /**
     * Uncompress a previously compressed stream in, writing the
     * uncompressed bits/data to out.
     * @param in is the previously compressed data (not a BitInputStream)
     * @param out is the uncompressed file/stream
     * @return the number of bits written to the uncompressed file/stream
     * @throws IOException if an error occurs while reading from the input file or
     * writing to the output file.
     */
    public int uncompress(InputStream in, OutputStream out) throws IOException {

        BitInputStream input = new BitInputStream(in);
        BitOutputStream output = new BitOutputStream(out);

        // read the magic number
        int magic = input.readBits(BITS_PER_INT);
        if (magic != MAGIC_NUMBER) {
            myViewer.showError("Error reading compressed file...File does not start with" +
                    "the huff magic number.");
            return -1;
        }

        // read the header format
        int headerFormat = input.readBits(BITS_PER_INT);
        if (headerFormat != IHuffConstants.STORE_COUNTS &&
                headerFormat != IHuffConstants.STORE_TREE) {
            myViewer.showError("Error reading compressed file. \n" +
                    "File did not contain header format.");
            return -1;
        }

        myViewer.showMessage("Decompressing file... ");
        // recreating tree
        HuffmanTree recreated = readHeaderData(input, headerFormat);

        // writing the original data to the file
        return decompressingData(recreated, input, output);
    }

    /**
     * Reads in the header data and recreates the Huffman tree using the specific format
     * @param input is the BitInputStream being read
     * @param headerFormat is the header format, either STF or SCF
     * @return the remade Huffman Tree
     * @throws IOException if error reading in the file
     */
    private HuffmanTree readHeaderData(BitInputStream input, int headerFormat) throws IOException {
        if (headerFormat == IHuffConstants.STORE_COUNTS) {
            // determine the frequencies of each value and construct the tree
            int[] frequencies = new int[IHuffConstants.ALPH_SIZE];
            for (int i = 0; i < IHuffConstants.ALPH_SIZE; i++) {
                int freqInOriginal = input.readBits(IHuffConstants.BITS_PER_INT);
                if (freqInOriginal == -1) {
                    myViewer.showError("Error reading compressed file.\n File did not" +
                            " correctly format SCF.");
                    return null;
                }
                frequencies[i] = freqInOriginal;
            }
            return new HuffmanTree(frequencies);
        } else {
            // if STF, create a new tree using the preorder traversal
            int sizeOfTree = input.readBits(IHuffConstants.BITS_PER_INT);
            if (sizeOfTree == -1) {
                myViewer.showError("Error reading compressed file.\n File did not" +
                        " correctly format STF.");
                return null;
            }
            return new HuffmanTree(input);
        }
    }

    /**
     * Writes the compressed data back in its original form
     * @param recreated the HuffmanTree made from the header data
     * @param input is the compressed file
     * @param output is the new file being made
     * @return the number of bits written
     * @throws IOException if error reading the compressed file
     */
    private int decompressingData(HuffmanTree recreated, BitInputStream input,
            BitOutputStream output) throws IOException {

        // start at root
        TreeNode node = recreated.getRoot();
        int writtenBits = 0;
        boolean done = false;
        // until you reach the PEOF, keep reading
        while (!done) {
            int bit = input.readBits(1);
            if (bit == -1) {
                myViewer.showError("Error reading compressed file. \n unexpected end of input" +
                        "No PSEUDO_EOF value");
                return -1;
            }

            if (bit == 0) {
                node = node.getLeft();
            } else {
                node = node.getRight();
            }

            // if reached a leaf, then read and write the original value
            if (node.isLeaf()) {
                // if PEOF, end reading
                if (node.getValue() == IHuffConstants.ALPH_SIZE) {
                    done = true;
                } else {
                    // otherwise, write the data and go back to beginning
                    output.writeBits(IHuffConstants.BITS_PER_WORD, node.getValue());
                    writtenBits += IHuffConstants.BITS_PER_WORD;
                    myViewer.update("Value found: " + node.getValue());
                    node = recreated.getRoot();
                }
            }
        }
        return writtenBits;
    }

    public void setViewer(IHuffViewer viewer) {
        myViewer = viewer;
    }

    private void showString(String s){
        if (myViewer != null) {
            myViewer.update(s);
        }
    }
}

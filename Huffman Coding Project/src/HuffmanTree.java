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

public class HuffmanTree {

    // instance variables
    private TreeNode root;
    private int internalNodes;
    private int leaves;

    /**
     * Creates the HuffmanTree by creating the frequencies into a priority queue
     * @param counts stores the frequency for each value
     */
    public HuffmanTree(int[] counts) {
        // created the priority queue for the nodes
        PriorityQueue314 pq = new PriorityQueue314();
        for (int i = 0; i < counts.length; i++) {
            if (counts[i] > 0) {
                pq.add(new TreeNode(i, counts[i]));
            }
        }
        // added the pseudo end of file character
        TreeNode peof = new TreeNode(IHuffConstants.ALPH_SIZE, 1);
        pq.add(peof);

        leaves = pq.size();

        // created the tree
        while (pq.size() >= 2) {
            TreeNode left = pq.remove();
            TreeNode right = pq.remove();
            TreeNode parent = new TreeNode(left, -1, right);
            internalNodes++;

            pq.add(parent);
        }
        root = pq.remove();
    }

    /**
     * Recreates a HuffmanTree using the input
     * @param input is the compressed file
     * @throws IOException if error occurs while reading file
     */
    public HuffmanTree(BitInputStream input) throws IOException {
        root = recreationHelper(input);
    }

    /**
     * Helper method to recreate the tree from the STF
     * @param in is the compressed file
     * @return the root for the new tree
     * @throws IOException if error occurs while reading file
     */
    private TreeNode recreationHelper(BitInputStream in) throws IOException {
        int bitRead = in.readBits(1);
        if (bitRead == 0) {
            // internal node
            internalNodes++;
            return new TreeNode(recreationHelper(in), -1, recreationHelper(in));
        }
        else if (bitRead == 1) {
            // leaf node, read in 9 bits
            leaves++;
            int value = in.readBits(IHuffConstants.BITS_PER_WORD + 1);
            // make new node with value and frequency
            return new TreeNode(value, 0);
        }
        else {
            throw new IOException("Error reading compressed file. \n" +
                    "format of the tree is incorrect.");
        }
    }

    /**
     * Gets the root of the tree
     * @return the root
     */
    public TreeNode getRoot() {
        return root;
    }

    /**
     * Returns the number of internal nodes
     * @return the number of non-leaf nodes
     */
    public int numInternalNodes() {
        return internalNodes;
    }

    /**
     * Returns the number of leaf nodes
     * @return the number of nodes without children
     */
    public int numLeaves() {
        return leaves;
    }

    /**
     * Writes the preorder traversal of the tree for the STF
     * @param output is the compressed file being written to
     */
    public void writePreorder(BitOutputStream output) {
        TreeNode temp = root;
        if (temp != null) {
            writeHelper(temp, output);
        }
    }

    /**
     * Helper method to write the tree's STF
     * @param n is the current node
     * @param output is the compressed file being written to
     */
    private void writeHelper(TreeNode n, BitOutputStream output) {
        // check if no children --> write 1 and output binary representation
        // else has 2 children --> write 0 and check children
        if (n.isLeaf()) {
            output.writeBits(1, 1);
            output.writeBits(IHuffConstants.BITS_PER_WORD + 1, n.getValue());
        } else {
            output.writeBits(1, 0);
            writeHelper(n.getLeft(), output);
            writeHelper(n.getRight(), output);
        }
    }
}

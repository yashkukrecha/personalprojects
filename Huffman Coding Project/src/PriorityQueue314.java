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

import java.util.ArrayList;

public class PriorityQueue314 {

    // instance variables
    // back of arraylist is front of pq
    ArrayList<TreeNode> inner;

    /**
     * Empty priority queue
     */
    public PriorityQueue314() {
        inner = new ArrayList<>();
    }

    /**
     * Adds based on priority and time (if equal)
     * @param node is the current node being added
     */
    public void add(TreeNode node) {
        int index = 0;
        // starts from back of priority queue and keeps going until it finds an equal or smaller value
        while (index < inner.size() && node.compareTo(inner.get(index)) < 0) {
            index++;
        }
        // adds
        inner.add(index, node);
    }

    /**
     * Removes the first value in the pq
     * @return the node
     */
    public TreeNode remove() {
        if (inner.size() == 0) {
            return null;
        }
        // O(1) to remove last in list
        return inner.remove(inner.size() - 1);
    }

    /**
     * Gets the first value in the pq
     * @return the first node
     */
    public TreeNode peek() {
        return inner.get(inner.size() - 1);
    }

    /**
     * Gets the size
     * @return the number of nodes
     */
    public int size() {
        return inner.size();
    }

    /**
     * Checks if it is empty
     * @return true if empty, false otherwise
     */
    public boolean isEmpty() {
        return inner.isEmpty();
    }
}

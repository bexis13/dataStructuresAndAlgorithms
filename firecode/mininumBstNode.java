import java.util.*; 
import java.util.streams.*;

//question
//Given a Binary Search Tree, return the node with the minimum data.

//my solution 

public TreeNode findMin(TreeNode root) {
    if( root == null){ return root; }
    TreeNode temp = root;
    while( temp.left != null){
        temp = temp.left;
    }
    return temp;
}
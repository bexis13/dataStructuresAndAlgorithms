import java.util.*; 
import java.util.streams.*; 



//question
Given a binary tree, write a method to return its size. The size of a tree is the number of nodes it contains. 

 //my solution

public int size(TreeNode root) {
    //
    if( root == null){
        return 0;
    }
    //
    return 1 + size(root.left) + size(root.right);
}
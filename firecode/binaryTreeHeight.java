import java.util.*; 
import java.util.streams.*; 


//question
//Given a binary tree, find its findHeight

// my solution

public int findHeight(TreeNode root) { 
    if( root == null){
        return 0;
    }
    return Math.max( findHeight(root.left), findHeight(root.right) )+1;
}
import java.util.*; 
import java.util.streams.*; 


//question
//Given a binary tree, check if it is a binary search tree

// my solution

public static boolean validBST(TreeNode root, int minValue, int maxValue){
    if(root == null){
        return true;
    }
    if(root.data < minValue || root.data > maxValue ){
        return false;
    }else{
       return validBST(root.left,minValue,root.data) &&  validBST(root.right, root.data, maxValue);
    }
}
public static boolean validateBST(TreeNode root) {
    //
    return validBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
}
Find the 
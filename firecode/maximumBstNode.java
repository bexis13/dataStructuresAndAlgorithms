// java.util.* and java.util.streams.* have been imported for this problem.
// You don't need any other imports.

//question
//Given a Binary Search Tree, return the node with the maximum data.

public TreeNode findMax(TreeNode root) {
    if(root == null){
        return null;
    }
    if(root.right == null){
        return root;
    }
    else{
        return findMax(root.right);
    }
}
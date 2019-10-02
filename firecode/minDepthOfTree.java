import java.util.*; 
import java.util.streams.*; 

//question

//find the minimum depth of a tree

// my solution

public int minTreeDepth(TreeNode root) {
    //
    if( root == null){ 
        return 0; 
    }
    //
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    int level = 1; // will serve as minimum depth
    int sizeOfLevel = 1;
    int sizeOfNextLevel = 0;
    TreeNode dequeuedNode = new TreeNode();
    //
    while( !queue.isEmpty() ){
        dequeuedNode = queue.poll();
        sizeOfLevel--;
        //
        if(dequeuedNode.left == null && dequeuedNode.right == null ){
            break;
        }
        if( dequeuedNode.left != null){
            queue.add(dequeuedNode.left);
            sizeOfNextLevel++;
        }
        if( dequeuedNode.right != null){
            queue.add(dequeuedNode.right);
            sizeOfNextLevel++;
        }
        if( sizeOfLevel == 0){
            level++;
            sizeOfLevel = sizeOfNextLevel;
            sizeOfNextLevel = 0;
        }
    }
    return level;
}
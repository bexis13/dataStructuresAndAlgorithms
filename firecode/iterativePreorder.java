import java.util.*; 
import java.util.streams.*; 

//do iterative preorder traversal on a binary search tree

// my solution

public ArrayList<Integer> preorderItr(TreeNode root) {
    ArrayList myArrLst = new ArrayList(5);
    TreeNode temp;
    Deque<TreeNode> stack = new ArrayDeque<>();
    if( root != null){
        stack.push(root);
    }
    while(!stack.isEmpty()){
        temp = stack.pop();
        myArrLst.add(temp.data);
        if(temp.right != null){
            stack.push(temp.right);
        }
        if(temp.left != null){
            stack.push(temp.left);
        }
    }
    return myArrLst;
}
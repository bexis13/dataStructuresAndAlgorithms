import java.util.*; 
import java.util.streams.*; 

//question

//Given a singly-linked list, implement a method to insert 
//a node at a specific position and return the head of the list.
//If the given position is greater than the list size, simply 
//insert the node at the end.



// my solution
public ListNode insertAtPosition(ListNode head, int data, int pos) {
    //
    ListNode newNode = new ListNode(data);
    if(head == null || pos == 1){
        newNode.next = head;
        return newNode;
    }
    //
    int currentPosition = 1;
    ListNode runner = head;
    
    while( runner.next != null && currentPosition + 1 != pos ){
        runner = runner.next;
        currentPosition++;
    }
    //
    newNode.next = runner.next;
    runner.next = newNode;
    return head;
}
import java.util.*; 
import java.util.streams.*; 

//question

//Given a circular linked list, write a method to insert
// a node at its tail. Return the list's head.

// my solution

public ListNode insertAtTail(ListNode head, int data) {
    //
    ListNode newNode = new ListNode(data);
    if(head == null){
        newNode.next = newNode;
        return newNode;
    }
    //
    ListNode runner = new ListNode(data);
    runner = head;
    while(runner.next != head){
        runner = runner.next;
    }
    runner.next = newNode;
    newNode.next = head;
    return head;
}
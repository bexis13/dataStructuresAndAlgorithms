 java.util.*;
 java.util.streams.*; 

 /**
 Given a singly-linked list, write a method to delete
 its last node and return the head.

Example:

1->2->3->4 ==> 1->2->3
1->2 ==> 1
1 ==> null
null ==> null
  */

public ListNode deleteAtTail(ListNode head) {
    ListNode runner;
    ListNode previous;
    //
    if( head == null){
        return null;
    }else if( head.next == null){
        head = null;
        return head;
    }
    //
    runner = head.next;
    previous = head;
    //
    while( runner.next != null){
        previous = runner;
        runner = runner.next;
    }
    //
    previous.next = null;
    return head;
}
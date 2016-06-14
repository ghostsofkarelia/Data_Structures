/**@author: Akshay Singh
JavaScript implementation of a Linked List and showcasing of stack and queue operations using
the Linked List
**/
var LinkedList = function() {
  this.start = null;
  this.end = null;
  LinkedList.node = function(item) { //Function to make a new node
    return {
      data: item,
      next: null
    };
  }
  this.add = function(item) { 
    if (this.start == null) { //Add a node to an empty list
      var temp = LinkedList.node(item);
      this.start = temp;
      this.end = temp;
    } else {
      var temp = LinkedList.node(item); //Else add it to the end
      this.end.next = temp;
      this.end = temp; //End pointer pointing to last node
    }
  }
  this.traverse = function() {
    var current = this.start; //Assign to the start
    while (current !== null) {
      console.log("Node is " + current.data);
      current = current.next; //Keep updating pointer 
    }
  }
  this.insertAsFirst = function(item) {
    var temp = LinkedList.node(item);
    temp.next = this.start; //Add it in front of the first node
    this.start = temp; //Start pointer poitning to new first node
  }
  this.delete = function(item) { //Using current and previous pointers delete becomes easy
    var current = this.start; 
    var previous = this.start;
    while (current !== null) {
      if (item === current.data) { //If the item to be deleted is at a node
        if (current === this.start) { //If node is start then remove start and exit
          this.start = this.start.next;
          return; 
        } else if (current === this.end) { // Else remove end node and exit
          this.end = previous;
          previous.next = null;
          return;
        } else {
          previous.next = current.next; //Else delete from the middle by bypassing references
          current.next = null;
          return;
        }
      }
      previous = current; //Store correct previous values
      current = current.next; //Update current pointer
    }
  }
  this.insertAfter = function(item, value) { //Insert after an item
    var current = this.start;
    while (current !== null) { 
      if (item === current.data) { 
        var temp = LinkedList.node(value);
        temp.next = current.next; //Point temp to current's next
        current.next = temp;//Point current to temp i.e insert after current
        if (current === this.end) {
          this.end = temp; //Insert at end
        }
      }
      current = current.next; //Update current pointer
    }
  }
  this.deleteAsFirst = function() { //
    var data = this.start.data;
    this.start = this.start.next; //Remove this.start by bypassing the pointer to next node
    return data;
  }
}

//Stack and queue operations are differntiated by order of insertion and deletion
//Check it out. Very interesting

var list = new LinkedList();

list.add(3);
list.add(2);
list.add(5);
list.add(10);

console.log("*************** STACKS **************************");
var stack = new LinkedList();

stack.insertAsFirst(3);
stack.insertAsFirst(2);
stack.insertAsFirst(5);
stack.insertAsFirst(10);
console.log("Before popping ");
stack.traverse();
console.log("Element popped " + stack.deleteAsFirst());
console.log("Element popped " + stack.deleteAsFirst());
console.log("Element popped " + stack.deleteAsFirst());

console.log("************************QUEUE********************");

var queue = new LinkedList();
queue.add(3);
queue.add(2);
queue.add(5);
queue.add(10);

console.log("Before dequeuing");
queue.traverse();

console.log("Element dequeued :" + queue.deleteAsFirst());
console.log("Element dequeued :" + queue.deleteAsFirst());

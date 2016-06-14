/**@author: Akshay Singh
JavaScript implementation of a Linked List and showcasing of stack and queue operations using
the Linked List
**/
var LinkedList = function() {
  this.start = null;
  this.end = null;
  LinkedList.node = function(item) {
    return {
      data: item,
      next: null
    };
  }
  this.add = function(item) {
    if (this.start == null) {
      var temp = LinkedList.node(item);
      this.start = temp;
      this.end = temp;
    } else {
      var temp = LinkedList.node(item);
      this.end.next = temp;
      this.end = temp;
    }
  }
  this.traverse = function() {
    var current = this.start;
    while (current !== null) {
      console.log("Node is " + current.data);
      current = current.next;
    }
  }
  this.insertAsFirst = function(item) {
    var temp = LinkedList.node(item);
    temp.next = this.start;
    this.start = temp;
  }
  this.delete = function(item) {
    var current = this.start;
    var previous = this.start;
    while (current !== null) {
      if (item === current.data) {
        if (current === this.start) {
          this.start = this.start.next;
          return;
        } else if (current === this.end) {
          this.end = previous;
          previous.next = null;
          return;
        } else {
          previous.next = current.next;
          current.next = null;
          return;
        }
      }
      previous = current;
      current = current.next;
    }
  }
  this.insertAfter = function(item, value) {
    var current = this.start;
    while (current !== null) {
      if (item === current.data) {
        var temp = LinkedList.node(value);
        temp.next = current.next;
        current.next = temp;
        if (current === this.end) {
          this.end = temp;
        }
      }
      current = current.next;
    }
  }
  this.deleteAsFirst = function() {
    var data = this.start.data;
    this.start = this.start.next;
    return data;
  }
}

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

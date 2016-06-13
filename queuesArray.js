/**
@author: Akshay Singh
Queue class with functions enqueue, dequeue, isEmpty and is isFull
**/
var Queue=function()
{
	this.front=-1;
  this.rear=-1;
  this.queue=new Array(10);
  this.isEmpty=function()
  {
  	if(this.front==-1 && this.rear==-1)
    {
    	return true;
    }
    else return false;
  }
  this.isFull=function()
  {
  	if((this.rear+1)%this.queue.length==this.front) //To create a circular queue
    {
    	return true;
    }
    else return false;
  }
  this.enqueue=function(item)
  {
  	if(this.isFull())
    {
    	console.log("Queue is full ");
      return;
    }
    else if(this.isEmpty())
    {
    	this.rear=this.front=0;
    }
    else this.rear=(this.rear+1)%this.queue.length; //If ends, append to the start
    this.queue[this.rear]=item;
  }
  this.dequeue=function()
  {
  	if(this.isEmpty())
    {
    	this.front=this.rear=-1;
    }
    else this.front=this.front+1;
  }
}
	
var queue=new Queue();
for(var i=0;i<10;i++)
{
	queue.enqueue(i);
}

console.log(queue);

//queue.enqueue(11);
//queue.enqueue(12);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);

queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);


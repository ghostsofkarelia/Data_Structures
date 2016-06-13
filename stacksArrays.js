/**
@author: Akshay Singh
MyStack class with push, pop, isFull and isEmpty functions
**/
var MyStack=function()
{
	this.items=new Array(10);
  this.top=-1;
  this.isEmpty=function()
  {
  	if(this.top==-1)
    {
    	return true;
    }
    else return false;
  }
  this.isFull=function()
  {
  	if(this.top==(this.items.length-1))
    {
    	return true;
    }
    else return false;
  }
  this.push=function(item)
  {
  	if(this.isFull())
    {
    	console.log("Stack is full ");
      return;
    }
    else 
    {
    	this.top++;
    	this.items[this.top]=item;
    }
  }
  this.pop=function()
  {
  	if(this.isEmpty())
    {
    	console.log("Stack is empty ");
      return;
    }
    else 
    {
    	var data=this.items[this.top]; 
    	this.top--;
      return data;
    }
  }
}


var stack=new MyStack();
stack.push(10);
stack.push(9);
stack.push(8);
stack.push(7);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
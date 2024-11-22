// create a queue from Stack
// stack (example stack of pappers) follows first in last out
// queue (example queue of people) follows first in first out
// approach: if you add items in first stack and while popping you add it to second stack it will 
// reverse the order, meaning first element pushed in first becomes last element pushed to second 
// hence this phenomenon achieves the concept of queue
class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        this.data[this.data.length - 1];
    }
}

class QueueFromStacks {
 constructor() {
  this.first = new Stack();
  this.second = new Stack();
 }

 add(record) {
  this.first.push(record);
 }

 remove() {
  while(this.first.peek()) {
   this.second.push(this.first.pop());
  }

  const record = this.second.pop();

  while(this.second.peek()){
   this.first.push(this.second.pop());
  }

  return record;
 }

 peek() {
  while(this.first.peek()){
   this.second.push(this.first.pop());
  }

  const record = this.second.peek();

  while(this.second.peek()){
   this.first.push(this.second.pop());
  }

  return record;
 }
}

 const q = new QueueFromStacks();
    q.add(1);
    q.add(2);
    q.peek();  // returns 1
    q.remove(); // returns 1
    q.remove(); // returns 2




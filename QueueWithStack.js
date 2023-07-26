class QueueWithStack {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(value) {
      this.stack1.push(value);
    }
  isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
        return;
      }
  
      console.log("Queue elements (front to rear):");
     
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      
      for (let i = this.stack2.length - 1; i >= 0; i--) {
        console.log(this.stack2[i]);
      }
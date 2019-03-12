class Stack{
	constructor(){
		 this.items=[];
	}
	push(element){
		this.items.push(element);
	}
	pop(){
		if(this.items.length==0)
			return "underflow";
		else
			this.items.pop();
	}
	top(){
		if (this.items.length==0) {
			return null;
		}else
		{
			return this.items[this.items.length-1];
		}
	}
	isEmpty(){
		if(this.items.length==0){
			return null;
		}
		else{
			return this.items.length;
		}
	}
}

var stack = new Stack();
stack.push(11);
stack.push(21);
stack.push(31);
stack.push(41);
console.log(stack.top());
stack.pop();
console.log(stack.top());
console.log(stack.isEmpty());

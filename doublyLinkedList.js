	  class Node{
		constructor(element){
				this.element=element;
				this.next=null;
				this.prev=null;
		}
	  }
	  class DoublyLinkedList {
		constructor(){
			this.head=null;
			this.tail=null;
		}
		append(value){
			var node = new Node(value);
			var current;
			if(this.head==null){
				this.head=node;
				this.tail=node;
			}
			else{
				this.tail.next=node;
				node.prev=this.tail;
				this.tail=node;
			}
		}
		remove(value){
			var current=this.head;
			while(current!=null){
				if(current.element==value){
					current.prev.next=current.next;
					current.next.prev=current.prev;
				}
				current=current.next;
			}
		}
		lengthList(){
			var counter=0;
			var current=this.head;
			while(current!=null){
				counter++;
				current=current.next;
			}
			console.log(counter);

		}
		print(){
			var current=this.head;
			var str="";
			//console.log(current);
			if(current==null)
				console.log("list is empty!");
			else{
				while(current!=null){
					str+=current.element+ " - ";
					//console.log(current);
					current=current.next;
				}
			}
			console.log(str);
		}
		deleteTail(){
			if(!this.tail){
				return null;
			}
			if(this.tail===this.head){
				this.tail=null;
				this.head=null;
			}
			var current=this.tail.prev;
			if(this.tail.prev){
				this.tail.prev=null;
				current.next=null;
				this.tail=current;
			}
		}
		deleteHead(){
			if(!this.head){
				return null;
			}

			var current=this.head.next;
			if(this.tail===this.head){
				this.head=null;
				this.tail=null;
			}
			if(this.head.next)
			this.head.next=null;
			current.prev=null;
			this.head=current;
		}
		reverse(){
			var prevNode=null;
			var nextNode=null;
			var current=this.head;
			while(current){
				prevNode=current.prev;
				nextNode=current.next;

				current.next=prevNode;
				current.prev=nextNode;

				prevNode=current;
				current=nextNode;
			}
			this.tail=this.head;
			this.head=prevNode;
			return this;
		}
	}
	
	var list = new DoublyLinkedList();
	list.append(11);
	list.append(21);
	list.append(31);
	list.print();
	list.reverse();
	list.print();
	list.remove(21);
	list.print();
	list.lengthList();
	list.deleteTail();
	list.print();
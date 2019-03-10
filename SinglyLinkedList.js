	  class Node{
		constructor(element){
				this.element=element;
				this.next=null;
		}
	  }
	  class LinkedList {
		constructor(){
			this.head=null;
			this.size=0;
		}
		remove(value){
			var current=this.head;
			var prev=null
			while(current!=null){
				if(current.element===value){
					
					if(prev==null){
						this.head=current.next;
					}
					else
						prev.next=current.next;
				}
			prev=current;
			current=current.next;
			}

		}
		append(value){
			var node = new Node(value);
			var current;
			if(this.head==null){
				this.head=node;
			}
			else{
				current=this.head;
			
			while(current.next){
				current=current.next;
			}
			current.next=node;
			}
		}
		print(){
			var current=this.head;
			var str="";
			while(current){
				str+=current.element + " ";
				current=current.next;
			}
			console.log(str);
		}
		search(value){
			var current=this.head;
			var counter=1;
			while(current!=null){
				
				if(current.element===value){
					console.log(counter+ ".eleman olarak bulundu " + current.element);
					return counter;
				}
				else{
					counter++
					current=current.next;
			}
		}
	}
		reverse(){
			var current=this.head;
			var prevNode= null;
			var nextNode=null
				while(current!=null){
					nextNode=current.next;
					current.next=prevNode;
					prevNode=current;
					current=nextNode;
				}
				this.head=prevNode;
		}
		lengthList(){
			var current=this.head;
			var counter=0;
			while(current!=null){
				counter++;
				current=current.next;
			}
			console.log(counter);
		}
}


	var list= new LinkedList();
	list.append(213);
	list.append(23);
	list.append(55);
	list.append(11);
	list.print();
	list.remove(23);
	list.print();
	list.search(11);
	list.reverse();
	list.print();
	list.lengthList();
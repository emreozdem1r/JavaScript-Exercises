class Node{
	constructor(data){
		this.data=data;
		this.left=null;
		this.right=null;
	}
}
class BinarySearchTree{
	constructor(){
		this.root=null;
	}
	insert(data){
		var newNode= new Node(data);
		if(this.root===null){
			this.root=newNode;
		}
		else{
			this.insertNode(this.root,newNode);
		}
	}
	insertNode(node,newNode){
			if (newNode.data < node.data ) {
				if (node.left===null)
					node.left=newNode;	
				else
				this.insertNode(node.left,newNode);
			}
			else{
				if (node.right===null) 
					node.right=newNode;	
			else
				this.insertNode(node.right,newNode);
			}
		}
	
	preorder(node){
		if (node!=null) {
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}
	postorder(node){
		if (node!=null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
	}
	inorder(node){
		if (node!=null) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}
	getRootNode(){ 
		    return this.root; 
	} 
	findMinNode(node){
	if(node.left===null)
			return node;
	else
			return this.findMinNode(node.left); 
	}
	findMaxNode(node){
	if(node.right===null)
			return node;
	else
			return this.findMaxNode(node.right); 
	}
	search(node, data) 
	{
		if(node.data===data)
			return data;
		else if(node.data<data)
			return this.search(node.right,data);
		
		else if(node.data>data)
			return this.search(node.left,data);
		
		else 
			return node.data;
	}
}
var tree = new BinarySearchTree();
	tree.insert(5);
	tree.insert(3);
	tree.insert(1);
	tree.insert(2);
	tree.insert(7);
	tree.insert(4);
	tree.insert(6);

	var root=tree.getRootNode();
	tree.inorder(root);
	console.log("min node: " +tree.findMinNode(root).data);
	console.log("max node: " +tree.findMaxNode(root).data);
	console.log("find searchin data: " +tree.search(root,4));



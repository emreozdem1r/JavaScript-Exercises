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
}
var tree = new BinarySearchTree();
	tree.insert(1);
	tree.insert(3);
	tree.insert(5);
	tree.insert(2);
	tree.insert(7);
	tree.insert(4);
	tree.insert(6);

var root=tree.getRootNode();
tree.inorder(root);

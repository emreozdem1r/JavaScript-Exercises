function func(){
var liArray=document.getElementsByTagName('li');
var special=document.getElementsByClassName("special");
	for (var i = 0 ; i <liArray.length; i++) {
		liArray[i].style.color="blue"; 
		liArray[i].style.backgroundColor="red";
	}
	var special=document.getElementsByClassName("special");
 for( i=0;i<special.length;i++){
 	special[i].style.backgroundColor="blue";
 	special[i].style.color="yellow";
 }
}

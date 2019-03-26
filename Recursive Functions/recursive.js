var fibo= function(getNumber){
	if(getNumber===1)
		return 1;
	else if(getNumber===0)
		return 0;
	else
	return this.fibo(getNumber-1) + this.fibo(getNumber-2);
}
 var fact=function(getNumber){
 	console.log(getNumber);
	if(getNumber<1)
		return 1;
	else
		return getNumber*fact(getNumber-1);
}
function yazdir(getNumber){
	document.getElementById('demo').innerHTML=fibo(getNumber);
	document.getElementById('demo1').innerHTML=fact(getNumber);
}
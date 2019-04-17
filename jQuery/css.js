$(document).ready(function(){
  $("#button1").click(function(){
  		
  		$("#div1").fadeOut(1000);
  		$("#div2").fadeOut(1000);
  		$("#div3").fadeOut(1000);
  		$("#div4").fadeOut(1000);
  });
});
$(document).ready(function(){
	$("#button2").click(function(){
		$("#div1").fadeIn(3000);
		$("#div2").fadeIn(3000);
		$("#div3").fadeIn(3000);
		$("#div4").fadeIn(3000);
	})
})
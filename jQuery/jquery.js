$(document).ready(function(){
	$("button").click(function(){
		$("#01").hide(1000);
	});

});	
$(document).ready(function(){
	$("#01").click(function(){
		$(this).hide();
	})
})
$(document).ready(function(){
	$("#02").click(function(){
		$("#01").show(1000);
	})
})
$(document).ready(function(){
	$("#03").mouseenter(function(){
		alert("Ustundesiniz!!");
	})
})
$(document).ready(function(){
	$("#button2").click(function(){
		$("p").toggle(1000);
	})
})
$(document).ready (function() {

	$('#open').click(function(){
		$('#manu1').fadeIn();
		$('#manu-bar').fadeOut();
		return false;
	});	 


	$('#close').click(function(){
		$('#manu-bar').fadeIn();
		$('#manu1').fadeOut();			
		return false;
	});
});



$(document).ready (function() {

	$('#Gallery').click(function(){
		$('#manu2').fadeIn();
		$('#manu-bar').fadeOut();
		$('#manu1').fadeOut();
		return false;
	});	 


	$('#close').click(function(){
		$('#manu-bar').fadeIn();
		$('#manu2').fadeOut();			
		return false;
	});
});

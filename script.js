$(document).ready(function() {
 // console.log("Script included!");
  $("li").click(function() {

  	$(this).toggleClass('underline');

  });
$("img").click(function(){

  $(this).fadeOut('slow', function(){  		

  			$(this).delay(4000).fadeIn('slow');  

  });

  });



});



/*do transition for background color of arrows*/
$( ".header-container" ).hover(
function() {
	$(".carousel-actions").css({"visibility":"visible"}); 
},
function(){
	$(".carousel-actions").css({"visibility":"hidden"});
});
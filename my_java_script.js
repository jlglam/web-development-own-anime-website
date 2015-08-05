
var main = function() {
	/*dealing with arrows visibility and background color change*/
	/*do transition for background color of arrows*/
	$( ".header-container" ).hover(
		function() {
			$(".carousel-actions").css({"visibility":"visible"}); 
		},
		function(){
			$(".carousel-actions").css({"visibility":"hidden"});
	});
	
	/*dealing with side-menu*/
	$(".menu-icon").click(function(event){
		event.stopPropagation();
		$(".menu").animate({
			left: "0px"
		}, 200);
			
	});	

	$(".close-icon").click(function(){
		$(".menu").animate({
			left: "-285px"
		}, 200);
			
	});

	$(document).click(function(event)){
		event.stopPropagation();
	}

	$(document).click(function(){
		$(".menu").animate({
			left: "-285px"
		}, 200);
	});
	
};

$(document).ready(main);


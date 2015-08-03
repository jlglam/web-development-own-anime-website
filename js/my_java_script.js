$( ".my_header_links" ).hover(
function() {
	$(this).css("color","rgb(140, 96, 224)"); 
},
function(){
	$(this).css("color","rgb(240, 255, 0)"); 
});


my_fade($(".pic_element").first());

function my_fade( elem )
{
 elem.delay()
     .fadeIn(0)
     .delay(7500)
     .fadeOut( 
               function(){
				   if(elem.next().length)
				   {
				    	my_fade( elem.next() );	   
				   }else{
						my_fade( $(".pic_element").first() );   
				   }}
             );
}
$(document).ready( function() 
{
	$("#leftArrow").on("click", function() 
	{
		if ( $("figure:visible").prev("figure").length == 0 )
		{
			$("figure:visible").fadeOut("slow", function() 
			{
				// Don't forget index starts at 0
				$("figure").last().fadeIn("slow");
			});
		}
		
		else 
		{
			$("figure:visible").fadeOut("slow", function() 
			{
				$(this).prev("figure").fadeIn("slow");
			});
		}
	});
	
	$("#rightArrow").on( "click", function() 
	{
		// Check to see if a sibling follows the current <figure/> node
		if ( $("figure:visible").next("figure").length == 0 )
		{
			$("figure:visible").fadeOut("slow", function() 
			{
				// Don't forget index starts at 0
				$("figure").first().fadeIn("slow");
			});
		}
		
		// If there is a sibling next in line then we can do this
		else 
		{
			$("figure:visible").fadeOut("slow", function() 
			{			
				$(this).next().fadeIn("slow");
				
				// So we need to turn all the other circles besides this one white
				$("#folioCircles svg").eq( $(this).index() ).css( "fill", "#FF9F57" );
				
				var currentCircle = $("#folioCircles svg").eq( $(this).index() );
				
				currentCircle.css( "fill", "#FF9F57" );		
			});
		}
	
	});

});
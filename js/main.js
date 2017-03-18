jQuery(document).ready(function($) {
    var count = 1;
	var maxCount = 3;
	
	setInterval(nextSlide, 3000);
		
	function nextSlide(){	
		if(count != maxCount){
			count += 1;
		}
		else{
			count = 1;
		}
			
		$('#home-slider').fadeOut(500, function() {
        $('#home-slider').attr("src","images/pets" + count + ".jpg");
        $('#home-slider').fadeIn(500);
    });
	}
});
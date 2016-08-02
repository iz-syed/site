$(document).ready(function () {

    // $(".player").mb_YTPlayer();

    console.log('document.ready')

    // $('#home-video').parallax("50%", 0.3);

    // Modal box close
    


$().alert('close');



});


 $(window).resize( function () {
 	console.log('window resize')
});


 // Show less toggle

 $('ul.mixology-list').each(function(){

	var LiN = $(this).find('li').length;

	if( LiN > 3){    

		$('li', this).eq(4).nextAll().hide().addClass('toggleable');

		$(this).append('<li class="more"><a href="javascript:void(0)">View More...</a></li>');    

		 // $(this).parent().append('<div class="more"><a href="javascript:void(0)">View More...</a></div>');

	}
});

 // Show less toggle text replacement
$('ul.mixology-list').on('click','.more', function(){

	if( $(this).hasClass('less') ){    
		
		$(this).text('View More...').removeClass('less');    
	}

	else {

		$(this).text('Less More...').addClass('less'); 
	}

	$(this).siblings('li.toggleable').slideToggle();

}); 


// SVG Replace

$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });
});








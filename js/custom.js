$(document).ready(function () {

    // $(".player").mb_YTPlayer();

    console.log('document.ready')

    // $('#home-video').parallax("50%", 0.3);





});


 $(window).resize( function () {
 	console.log('window resize')
});


 // Show less toggle

 $('ul.term-list').each(function(){

	var LiN = $(this).find('li').length;

	if( LiN > 3){    

		$('li', this).eq(4).nextAll().hide().addClass('toggleable');

		$(this).append('<li class="more"><a href="javascript:void(0)">View More...</a></li>');    

		 // $(this).parent().append('<div class="more"><a href="javascript:void(0)">View More...</a></div>');

	}
});

 // Show less toggle text replacement
$('ul.term-list').on('click','.more', function(){

	if( $(this).hasClass('less') ){    
		
		$(this).text('View More...').removeClass('less');    
	}

	else {

		$(this).text('Less More...').addClass('less'); 
	}

	$(this).siblings('li.toggleable').slideToggle();

}); 







$(document).ready(function() {
	
	/* Para criar novo menu quando rolar abaixo da seção principal*/
	$('.js--section-features').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
	  offset: '60px;'
	});
	
	
	/* Para ir até a primeira seção - NÃO FUNCIONA 
	$('.js--scroll-to-features').click(function () { 
		console.log($('.js--section-features').offset().top);
		$('html, body').animate({scrollTop: $(".js--section-features").offset().top}, 2000);
	});
	
	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});*/
	
	/*Animation on section-features*/
	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '70%'
	});	
	
	/*Animation on section-servicos*/
	$('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').addClass('animated bounceIn');
	}, {
		offset: '50%'
	});	
	
	/*Animation on section-operadoras*/
	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3').addClass('animated zoomIn');
	}, {
		offset: '50%'
	});	
	
	/*Animation on section-reservaja*/
	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4').addClass('animated jackInTheBox');
	}, {
		offset: '70%'
	});	
	
	/*Mobile navigation*/
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
		
		nav.slideToggle(200);
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
		
	});
	
	//Smooth navigation - CSS-TRICK ATUALIZADO
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	  });
	
	//Smooth scrolling opcao 2
	/*$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});*/
	   			   
});
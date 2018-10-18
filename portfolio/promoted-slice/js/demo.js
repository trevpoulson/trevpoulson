$(function() {
	// fade in the content when it becomes vissible
	$('.slice').one('inview', function(event, isInView) {
	  if (isInView) {
	    $(this).find('.content').addClass('animated');
			$(this).find('.fadeInForeground').addClass('animated');
	  }
	});

	$('header > .content').on('inview', function(event, isInView) {
	  if (isInView) {
		 $(this).addClass('animated');
	  }
		else {
			$(this).removeClass('animated');
		}
	});




	var $headerBackground = $(".background img");
	var $onPageNav = $('nav.on-page');
	var $window = $(window);



	//Header blurs and fades on scroll down
	$window.on('scroll', _.throttle(function() {
	var oVal = $window.scrollTop() / $('header.page').height(); ;
		if (oVal <= 1) {
			if ($headerBackground.css('display') != 'initial') {
				$headerBackground.css('display', 'initial');
			}
			$headerBackground.css({
					'opacity': 1 - oVal,
					'filter': 'blur(' + oVal * 10 +'px)'
			});
			if ($onPageNav.hasClass('sticky')) {
				$onPageNav.removeClass('sticky');
			} else {
				return;
			}

		} else {
			if ($onPageNav.hasClass('sticky')) {
					return;
			} else {
				$onPageNav.addClass('sticky');
			}

		}
	}, 100));



});

$(document).ready (function (){
    $('.page-nav').affix({
	    offset: {
	      top: 1723
	    , bottom: function () {
	        return (this.bottom = $('.footer').outerHeight(true))
	      }
    }
  })
});


/* $('.question-answer').parallax('50%', 0.2); */

$('.problem-link').click(function(){
	$.scrollTo($('.intro'), 1000)
})

$('.answers-link').click(function(){
	$.scrollTo('.answers', 1000)
})

$('.question-link').click(function(){
	$.scrollTo('.question', 1000)
})

$('.verisk-link').click(function(){
	$.scrollTo('.about', 1000)
})
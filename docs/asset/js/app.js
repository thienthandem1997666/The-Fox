$('document').ready(function(){
	$('.slider__header').click(function(){
		$(this).next().toggle(2000);
	})
});
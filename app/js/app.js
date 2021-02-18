/* Mansory */
$(document).ready(function(){ 
	$('#container').masonry({
// указываем элемент-контейнер в котором расположены блоки для динамической верстки
	  itemSelector: '.justification__item',
// указываем класс элемента являющегося блоком в нашей сетке
		singleMode: true,
// true - если у вас все блоки одинаковой ширины
	  isResizable: false,
// перестраивает блоки при изменении размеров окна
	  isAnimated: false,
		gutter: '.justification__item-space',
	}); 
});

/* InputMask */
$(document).ready(function(){
		$('.consultation__phone').inputmask({"mask": "+7 (999) 999-9999"}); 
    $('.consultation__email').inputmask("email");   
    $('.questions__phone').inputmask({"mask": "+7 (999) 999-9999"}); 
    $('.questions__email').inputmask("email");     
});

/*Slick slider*/
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
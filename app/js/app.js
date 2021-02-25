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




$('.cases__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 782,
      settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
      }
    }
	],
	prevArrow:"<button type='button' class='slick-prev'></button>",
	nextArrow:"<button type='button' class='slick-next'></button>",
});

/*Modal*/


$(function(){
    $('#modal-snab-vostok').arcticmodal();
});

/* modal-snab-vostok.onclick = function(event) {
	
};*/

$(function () {
    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault(); /*отменяет перезагрузку страницы по сылке*/
        $('#nav').removeClass('show');
        $('.burger__item').removeClass('active');
        let  elementId = $(this).data('scroll'); /*получаем id на который кликнули*/
        let  elementOffset = $(elementId).offset().top; /*получаем высоту от верха до начала элемента*/
        $("html, body").animate({
            scrollTop : elementOffset 
        }, 700);
    });
});

$(function(){
   $('.btn--burger').on("click", function(event){
       $('#nav').toggleClass('show'); 
       $('.burger__item').toggleClass('active');
   });
});





















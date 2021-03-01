/* Mansory */
$(document).ready(function () {
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
$(document).ready(function () {
	$('.consultation__phone').inputmask({
		"mask": "+7 (999) 999-9999"
	});
	$('.consultation__email').inputmask("email");
	$('.callback__phone').inputmask({
		"mask": "+7 (999) 999-9999"
	});
	$('.callback__email').inputmask("email");
	$('.questions__phone').inputmask({
		"mask": "+7 (999) 999-9999"
	});
	$('.questions__email').inputmask("email");
});

/*Slick slider*/

$('.cases__slider').slick({
	infinite: false,
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
	prevArrow: "<button type='button' class='slick-prev'></button>",
	nextArrow: "<button type='button' class='slick-next'></button>",
});

/*Modal*/

$(function () {
	$("#fresh").on("click", function (event) {
		event.preventDefault();
		$('#modal-fresh').arcticmodal();
	});

	$("#item-fresh").on("click", function (event) {
		event.preventDefault();
		$('#modal-fresh').arcticmodal();
	});

	$("#tigre").on("click", function (event) {
		event.preventDefault();
		$('#modal-tigre').arcticmodal();
	});

	$("#item-tigre").on("click", function (event) {
		event.preventDefault();
		$('#modal-tigre').arcticmodal();
	});

	$("#bakkon").on("click", function (event) {
		event.preventDefault();
		$('#modal-bakkon').arcticmodal();
	});

	$("#item-bakkon").on("click", function (event) {
		event.preventDefault();
		$('#modal-bakkon').arcticmodal();
	});

	$("#marathon").on("click", function (event) {
		event.preventDefault();
		$('#modal-marathon').arcticmodal();
	});

	$("#item-marathon").on("click", function (event) {
		event.preventDefault();
		$('#modal-marathon').arcticmodal();
	});

	$("#snab").on("click", function (event) {
		event.preventDefault();
		$('#modal-snab').arcticmodal();
	});

	$("#item-snab").on("click", function (event) {
		event.preventDefault();
		$('#modal-snab').arcticmodal();
	});



	$(".btn--black").on("click", function (event) {
		event.preventDefault();
		$('#modal-callback').arcticmodal();
	});

	$(".btn--violet--underline").on("click", function (event) {
		event.preventDefault();
		$('#modal-experience').arcticmodal();
	});

	$(".btn--audit").on("click", function (event) {
		event.preventDefault();
		$('#modal-audit').arcticmodal();
	});

	$(".btn--marketing").on("click", function (event) {
		event.preventDefault();
		$('#modal-marketing').arcticmodal();
	});


});

/*Smooth scroll*/

$(function () {
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault(); /*отменяет перезагрузку страницы по сылке*/
		$('.nav').removeClass('active');
		$('.btn--black').removeClass('active');
		$('.ham7').removeClass('active');
		let elementId = $(this).data('scroll'); /*получаем id на который кликнули*/
		let elementOffset = $(elementId).offset().top; /*получаем высоту от верха до начала элемента*/
		$("html, body").animate({
			scrollTop: elementOffset
		}, 700);
	});
});

$(function () {
	$('.burger').on("click", function (event) {
		$('.nav').toggleClass('active');
		$('.btn--black').toggleClass('active');
	});
});
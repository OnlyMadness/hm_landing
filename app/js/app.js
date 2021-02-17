
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

/*$(document).ready(function(){ 
	var $grid = $('#container').masonry({
		itemSelector: '.justification__item',
		percentPosition: true,
		columnWidth: '.justification__item'
	});
	$grid.imagesLoaded().progress( function() {
		$grid.masonry();
	});  

});*/
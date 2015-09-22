var rows = 16;
var columns = 16;
var $row = $("<div />", {
	class: 'row'
});
var $square = $("<div />", {
	class: 'square'
});

$(document).ready(function() {
	console.log("Hola");
	for(var i=0; i < columns; i++) {
		$row.append($square.clone());
	}
	for(var i=0; i < rows; i++) {
		$("#container-grid").append($row.clone());
	}
});

$(function() {
	//We insert this into a function to make sure the DOM is ready.
	$('.square').hover(function() {
		//handlerIn
		$(this).css("background-color", "blue");
	}, function() {
		//handlerOut
		
	});
});
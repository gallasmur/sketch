var rows = 0;
var columns = 0;
var $row = $("<div />", {
	class: 'row'
});
var $square = $("<div />", {
	class: 'square'
});

$(document).ready(function() {
	console.log("Hola");
	newGrid(16);
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

$(function() {
	$('button').click(function() {
		console.log("click");
		var selection = prompt("How many squares for side?");
		
		$("#container-grid").fadeOut('fast');
		newGrid(selection);
		$('.square').css("background-color", "white");
		$("#container-grid").fadeIn('slow');
	});
});

function newGrid(number) {
	var size = 960 / number - 2;

	for(var i=0; i < number; i++) {
		$row.append($square.clone());
	}
	for(var i=0; i < number; i++) {
		$("#container-grid").append($row.clone());
	}

	$('.square').css("width", size + "px");
	$('.square').css("height", size + "px");
}


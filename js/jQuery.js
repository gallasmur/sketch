var rows = 4;
var columns = 4;
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
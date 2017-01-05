// inspiration: https://codepen.io/rachsmith/post/my-process-for-building-generative-pens

var svgns = "http://www.w3.org/2000/svg";

var color1 = "pink";
var color2 = "red";
var color3 = "green";
var defaultHeight = 420;
var defaultWidth = 50;
var defaultMargin = defaultWidth + 20;
var startXAxis = 500;
var startYAxis = 0;
var button = document.getElementById("enter");

var makeRectangle = function(xAxis, yAxis , recWidth, recHeight, color){
	var rect = document.createElementNS(svgns, 'rect');
	rect.setAttributeNS(null, 'x', xAxis);
	rect.setAttributeNS(null, 'y', yAxis);
	rect.setAttributeNS(null, 'height', recHeight);
	rect.setAttributeNS(null, 'width', recWidth);
	rect.setAttributeNS(null, 'fill', color);
	document.getElementById('svgOne').appendChild(rect);
};

var makeFraction = function(numerator, denominator){
	console.log(numerator + " " + denominator);
	if (numerator > denominator){
		var wholeNumber = Math.floor(numerator/denominator);
		var newNumerator = numerator % denominator;
		for (var k = 0; k < wholeNumber; k++) {
			for (var j = 0; j < denominator; j++) {
			makeRectangle(startXAxis + (k * defaultMargin), 
			  startYAxis + (j * defaultHeight / denominator), 
			  defaultWidth, defaultHeight / denominator, color2);
			}
		}
		for (var l = 0; l < denominator; l++){
			if (denominator - newNumerator > l) {color1 = "white"} 
			else {color1 = "red"};
			makeRectangle(startXAxis + (wholeNumber) * defaultMargin, 
			  startYAxis + l * defaultHeight / denominator, 
			  defaultWidth, defaultHeight / denominator, color1);
		}
	} else {
		for (var i = 0; i < denominator; i++){
			if (denominator-numerator > i) {color1 = "white"} 
			else {color1 = "red"};
			makeRectangle(startXAxis, startYAxis + i * defaultHeight / denominator, 
			  defaultWidth, defaultHeight / denominator, color1);
		}
	}	
};

button.addEventListener("click", function(){
	var enterNumerator = parseInt(document.getElementById("numerator").value);
	var enterDenominator = parseInt(document.getElementById("denominator").value);
	makeFraction(enterNumerator, enterDenominator);
});

// inspiration: https://codepen.io/rachsmith/post/my-process-for-building-generative-pens

var svgns = "http://www.w3.org/2000/svg";

var color1 = "pink";
var color2 = "red";
var color3 = "green";

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
	if (numerator>denominator){
		var wholeNumber = Math.floor(numerator/denominator);
		var newNumerator = numerator%denominator;
		console.log(wholeNumber + " " + newNumerator);
		for (var k = 0; k<wholeNumber; k++) {
			for (var j = 0; j<denominator; j++) {
			makeRectangle(100+k*70, 300+j*420/denominator, 50, 420/denominator, color2);
			}
		}
		for (var l = 0; l<denominator; l++){
			if (denominator-newNumerator>l) {color1 = "white"} 
			else {color1 = "red"};
			makeRectangle(100+(wholeNumber)*70, 300+l*420/denominator, 50, 420/denominator, color1);
		}
	} else {
		for (var i = 0; i<denominator; i++){
			if (denominator-numerator>i) {color1 = "white"} 
			else {color1 = "red"};
			makeRectangle(100, 300+i*420/denominator, 50, 420/denominator, color1);
		}
	}	
};

makeFraction(14, 5);
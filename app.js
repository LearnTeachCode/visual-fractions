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

makeRectangle(200, 300, 100, 100, color1);
makeRectangle(200, 400, 100, 100, color2);
makeRectangle(200, 500, 100, 100, color3);

//makeRectangle(400, 300, 50, 420, color1); 


var makeFraction = function(num){
	for (var i = 0; i<num; i++){
	makeRectangle(400, 300+i*420/num, 50, 420/num, color1);
	}	
};

makeFraction(2);
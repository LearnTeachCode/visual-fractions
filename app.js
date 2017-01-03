// inspiration: https://codepen.io/rachsmith/post/my-process-for-building-generative-pens

var svgns = "http://www.w3.org/2000/svg";

var color1 = "pink";
var color2 = "red";
var color3 = "green";

var makeRectangle = function(xAxis, yAxis , recHeight, recWidth, color){
	var rect = document.createElementNS(svgns, 'rect');
	rect.setAttributeNS(null, 'x', xAxis);
	rect.setAttributeNS(null, 'y', yAxis);
	rect.setAttributeNS(null, 'height', recHeight);
	rect.setAttributeNS(null, 'width', recWidth);
	rect.setAttributeNS(null, 'fill', color);
	document.getElementById('svgOne').appendChild(rect);
};

makeRectangle(200, 300, 100, 50, color1);
makeRectangle(250, 300, 100, 50, color2);
makeRectangle(300, 300, 100, 50, color3);


// inspiration: https://codepen.io/rachsmith/post/my-process-for-building-generative-pens

var svgns = "http://www.w3.org/2000/svg";
var rect = document.createElementNS(svgns, 'rect');
rect.setAttributeNS(null, 'x', 100);
rect.setAttributeNS(null, 'y', 100);
rect.setAttributeNS(null, 'height', '200');
rect.setAttributeNS(null, 'width', '50');
rect.setAttributeNS(null, 'fill', 'blue');
document.getElementById('svgOne').appendChild(rect);

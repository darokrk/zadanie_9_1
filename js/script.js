//start function

function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a*h/2;
	}
	else {
		return 'Nieprawidlowe dane';
	}	
}
/* console.log(gettraingleArea(6, 10)); */

var triangle1Area = getTriangleArea(-10, 15);
var triangle2Area = getTriangleArea(5, 10);
var triangle3Area = getTriangleArea(20, 8);



console.log(triangle1Area);
alert(triangle1Area);

console.log(triangle2Area);
alert(triangle2Area);

console.log(triangle3Area);
alert(triangle3Area);
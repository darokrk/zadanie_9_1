
var a = prompt('Podaj wartosc A');
var h = prompt('Podaj wartosc h');

//start function

	function getTriangleArea(a, h) {
		if (a > 0 && h > 0) {
			console.log('Prawidlowe dane');
			alert('Prawidlowe dane');
		}
		else {
			console.log('Nieprawidlowe dane');
			alert('Nieprawidlowe dane');
		}
		return a*h/2;
	}
	console.log(getTriangleArea(a, h));
	
var r = document.getElementById('red');
var g = document.getElementById('green');
var b = document.getElementById('blue');
red = r.value;
green = g.value;
blue = b.value;

r.addEventListener('change', function() {
	red = r.value;
})

g.addEventListener('change', function() {
	green = g.value;
})

b.addEventListener('change', function() {
	blue = b.value;
})

document.addEventListener('change', function(event) {
	document.body.style.backgroundColor = "rgb(" + red + ", " + green +"," + blue + ")";
	console.log(red, green, blue);
})
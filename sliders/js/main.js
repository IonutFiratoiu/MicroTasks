var r = document.getElementById('red');
var g = document.getElementById('green');
var b = document.getElementById('blue');
red = r.value;
green = g.value;
blue = b.value;

function changeColor(event) {
	document.body.style.backgroundColor = "rgb(" + red + ", " + green +"," + blue + ")";
	console.log(red, green, blue);
};

r.addEventListener('input', function() {
	red = r.value;
	changeColor();
});

g.addEventListener('input', function() {
	green = g.value;
	changeColor();
});

b.addEventListener('input', function() {
	blue = b.value;
	changeColor();
});
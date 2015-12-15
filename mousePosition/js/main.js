var x = document.getElementById("xnumber");
var y = document.getElementById("ynumber");

var xper = document.getElementById("xs");
var yper = document.getElementById("ys");

var width = window.innerWidth;
var height = window.innerHeight;

window.addEventListener("resize", function() {
	width = window.innerWidth;
	height = window.innerHeight;
});

document.addEventListener('mousemove', function(event) {
	console.log(event.clientX, event.clientY);
	x.value = event.clientX;
	y.value = event.clientY;
	xper.value = Math.round(event.clientX/width * 100) + "%";
	yper.value = Math.round(event.clientY/height * 100) + "%";
})


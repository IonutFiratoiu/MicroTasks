var width = window.innerWidth;
var height = window.innerHeight;

window.addEventListener("resize", function() {
	width = window.innerWidth;
	height = window.innerHeight;
});

document.addEventListener('mousemove', function(event) {
	var h = Math.round(event.clientX/width * 360);
	var s = Math.round(event.clientY/height * 100);
	document.body.style.backgroundColor = "hsl(" + h + ", " + s +"%, 50%)";
})
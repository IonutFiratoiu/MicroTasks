var f = document.getElementById('filled');
var container = document.getElementById('container');

f.addEventListener('keyup', function() {
	var r = f.value.trim().split(" ");
	var valid = true;

	if ((r.length != 2 ) || (r[0].length < 3 ) || (r.length > 1 && r[1].length < 3)) {
		valid = false;
	}

	console.log(valid);

	if (valid) {
		container.classList.add("valid");
	}else{
		container.classList.remove("valid");
	}
});
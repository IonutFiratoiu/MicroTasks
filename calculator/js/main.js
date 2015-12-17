var a = document.getElementById('a');
var b = document.getElementById('b');
var r = document.getElementById('r');
var select = document.getElementById('selector');

var x = a.value;
var y = b.value;
var o = select.value;

var s;

function calculate() {
	x = a.value;
	y = b.value;
	o = select.value;
	
	if ((a.length == 0) || (b.length == 0) || (o.length == 0)) {
		s = "";
	}
	if (o == "*") {
		s = x * y;
	}
	if (o == "/") {
		s = x / y;
	}
	if (o == "-") {
		s = x - y;
	}
	if (o == "+") {
		s = parseFloat(x) + parseFloat(y);
	}
};

a.addEventListener('change', function () {
	calculate();
	r.innerText = s;
	console.log(s);

});

b.addEventListener('change',function () {
	calculate();
	r.innerText = s;
	console.log(s);
});

select.addEventListener('change', function () {
	calculate();
	r.innerText = s;
	console.log(s);
});
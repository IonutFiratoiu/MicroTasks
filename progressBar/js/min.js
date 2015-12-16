var pbar = document.getElementById("bar");

var generatebtn = document.getElementById("generate");

var text = document.getElementById("percent");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function listener() {
	rnumber = getRandom(0, 100);
	pbar.value = rnumber;
	text.innerText = rnumber + " %";
}

generatebtn.addEventListener("click", listener);
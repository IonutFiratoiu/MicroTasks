var f = document.getElementById('insert');
var t = document.getElementById('text');
var b = document.getElementById('box');

f.addEventListener("submit", function (event) {
	event.preventDefault();
	var d = "<div><img src='http://icons.iconarchive.com/icons/reclusekc/kulo/96/Skull-0-icon.png'><div class='rightofimg'><p class='chat-text'>" + t.value + "</p></p>John Doe</p></p></div>"; 
	b.innerHTML += d;
	console.log(d);
	b.scrollTop = b.scrollHeight;
	t.value = null;
})


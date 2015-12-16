var stars = document.getElementsByClassName('star');
var number = document.getElementById('rating');

for(var i=0; i< stars.length; i ++) {
	var star = stars[i];
	star.addEventListener('mouseover', function () {
		var rating = this.getAttribute("data-value");
		number.value = rating; 
		for(j=0; j<parseInt(rating, 10); j++) {
			console.log('j:', j);
			stars[j].classList.add('active');
		}	
	});

	star.addEventListener('mouseout', function () {
	for(var j= 0; j<stars.length; j ++) {
		stars[j].classList.remove('active');
		number.value = null;
	}
})
}
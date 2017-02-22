
function setWife() {
	var sliderBox = document.querySelector('.girl-photo');
	sliderBox.style.backgroundImage = "url('img/slider_wife.jpg')";
}

function setGirl() {
	var sliderBox = document.querySelector('.girl-photo');
	sliderBox.style.backgroundImage = "url('img/slider_girl.jpg')";
}

$('.carousel').slick({
	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	dots: true
});












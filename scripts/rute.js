const sliding1 = document.querySelector(".satu");
const sliding2 = document.querySelector(".dua");
const sliding3 = document.querySelector(".tiga");
const koridor1 = document.querySelector(".koridor1");
const koridor2 = document.querySelector(".koridor2");
const koridor3 = document.querySelector(".koridor3");
let i = 0;

koridor1.addEventListener("mouseover", function() {
    sliding1.style.fontSize = "16px"
    sliding1.style.left = "0"
});

koridor2.addEventListener("mouseover", function() {
    sliding2.style.fontSize = "16px"
    sliding2.style.left = "0"
});

koridor3.addEventListener("mouseover", function() {
    sliding3.style.fontSize = "16px"
    sliding3.style.left = "0"
});

$(document).ready(function(){
    $('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});
})

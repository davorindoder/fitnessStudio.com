$("#slider_1").owlCarousel({
	loop: true,
	margin: 60,
	nav: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplaySpeed: 1000,
	responsive: {
		0: {
			items: 1,
		},
		450: {
			items: 2,
		},
		1000: {
			items: 3,
		},
	},
});
//NAVIGACIJA
let burger = document.querySelector(".burger");
let dropDown = document.querySelector(".links");

burger.addEventListener("click", showMenu);
function showMenu() {
	dropDown.classList.toggle("show_menu");
}
//ROTIRANJE KARTICE

let cards = document.querySelectorAll(".card");

//console.log(cards);

cards.forEach((card) => {
	card.addEventListener("click", rotateThisCard);
});

function rotateThisCard() {
if (this.classList.contains("card_flip")) {
    this.classList.remove("card_flip"); 
}
else {
	turnBackAllCards();
 this.classList.add("card_flip");
}
}

function turnBackAllCards() {
	cards.forEach((card) => {
		card.classList.remove("card_flip");
	});
}


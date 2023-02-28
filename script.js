const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const headerLinks = document.querySelectorAll('.header__link')

burger.addEventListener("click", function(event) {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('lock');
})



for (var i = 0; i < headerLinks.length; i++)
	headerLinks[i].addEventListener('click', function(e){
	burger.classList.remove('active');
	menu.classList.remove('active');
	})

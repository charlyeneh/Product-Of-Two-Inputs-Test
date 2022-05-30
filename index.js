// function to calculate Product
const calculateProduct = document.getElementById('product');

calculateProduct.addEventListener('click', () => {
	let input1 = document.getElementById('num1').value;
	let input2 = document.getElementById('num2').value;
	const product = Number(input1) * Number(input2);

	document.getElementById('product-display').innerHTML = product;
});

// mobile navbar toggler
const navSlide = () => {
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('.nav-links');
	const section = document.querySelector('section');

	hamburger.addEventListener('click', () => {
		const hide = document.querySelector('.nav-hide');
		if (nav.style.display === 'flex') {
			hide.style.display = 'none';
			nav.style.display = 'none';
		} else {
			hide.style.display = 'flex';
			nav.style.display = 'flex';
		}

		section.classList.toggle('section2');

		hamburger.classList.toggle('toggle');
	});
};

navSlide();

// function to calculate Product
const calculateProduct = document.getElementById('product');

calculateProduct.addEventListener('click', () => {
	let x = document.getElementById('num1').value;
	let y = document.getElementById('num2').value;
	const product = Number(x) * Number(y);

	document.getElementById('product-display').innerHTML = product;

	document.getElementById('num1').value.reset();
	document.getElementById('num2').value.reset();
});

const navSlide = () => {
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('.nav-links');

	hamburger.addEventListener('click', () => {
		const hide = document.querySelector('.nav-hide');
		if (nav.style.display === 'flex') {
			hide.style.display = 'none';
			nav.style.display = 'none';
		} else {
			hide.style.display = 'flex';
			nav.style.display = 'flex';
		}
	});
};

navSlide();

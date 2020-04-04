export const scrollTo = () => {
	const navLinks = document.querySelectorAll('.nav-link');
	const sections = {
		howItWorks: document.querySelector('.section--howitworks'),
		forPartners: document.querySelector('.section--forPartners'),
		forShoppers: document.querySelector('.section--forShoppers'),
		contact: document.querySelector('.contact')
	};

	function scrollTo() {
		event.preventDefault();
		window.scroll({
			top: sections[this.dataset.linkto].offsetTop - 60,
			left: 0,
			behavior: 'smooth'
		});
	}

	navLinks.forEach((link) => {
		link.addEventListener('click', scrollTo);
	});
};

export const activeButton = () => {
	const navbar = document.querySelector('.navbarfixed');
	const howitworksButton = document.getElementById('howitworks');
	const contactButton = document.getElementById('contact');
	const howitworksSection = document.querySelector('.section--howitworks');
	const contactSection = document.querySelector('.contact');
	const howitworksSectionTop = howitworksSection.offsetTop;
	const howitworksSectionBottom = howitworksSectionTop + howitworksSection.offsetHeight;
	const contactSectionTop = contactSection.offsetTop;
	const contactSectionBottom = contactSectionTop + contactSection.offsetHeight;
	const breakpoint = document.querySelector('.banner').offsetHeight - 250;

	function activeButton() {
		const currentScrollPos = window.pageYOffset;
		if (currentScrollPos > breakpoint) {
			navbar.classList.remove('hidden');
			navbar.classList.add('shown');

			if (currentScrollPos > howitworksSectionTop - 150 && currentScrollPos < howitworksSectionBottom) {
				howitworksButton.classList.add('active');
			} else {
				howitworksButton.classList.remove('active');
			}
			if (currentScrollPos > contactSectionTop - 150 && currentScrollPos < contactSectionBottom) {
				contactButton.classList.add('active');
			} else {
				contactButton.classList.remove('active');
			}
		} else {
			navbar.classList.remove('shown');
			navbar.classList.add('hidden');
		}
	}

	window.addEventListener('scroll', activeButton);
};

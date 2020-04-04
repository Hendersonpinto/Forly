export const activeButton = () => {
	const navbar = document.querySelector('.navbarfixed');
	const howitworksButton = document.getElementById('howitworks');
	const contactButton = document.getElementById('contact');
	const forPartnersButton = document.getElementById('forPartners');
	const forShoppersButton = document.getElementById('forShoppers');
	const messageleftSection = document.querySelector('.section--messageleft');
	const howitworksSection = document.querySelector('.section--howitworks');
	const contactSection = document.querySelector('.contact');
	const forPartnersSection = document.querySelector('.section--forPartners');
	const forShoppersSection = document.querySelector('.section--forShoppers');
	const forPartnersSectionTop = forPartnersSection.offsetTop;
	const forPartnersSectionBottom = forPartnersSectionTop + forPartnersSection.offsetHeight;
	const forShoppersSectionTop = forShoppersSection.offsetTop;
	const forShoppersSectionBottom = forShoppersSectionTop + forShoppersSection.offsetHeight;
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

			if (currentScrollPos > howitworksSectionTop - 100 && currentScrollPos < howitworksSectionBottom - 100) {
				howitworksButton.classList.add('active');
			} else {
				howitworksButton.classList.remove('active');
			}
			if (currentScrollPos > contactSectionTop - 100 && currentScrollPos < contactSectionBottom - 100) {
				contactButton.classList.add('active');
			} else {
				contactButton.classList.remove('active');
			}
			if (currentScrollPos > forPartnersSectionTop - 100 && currentScrollPos < forPartnersSectionBottom - 100) {
				forPartnersButton.classList.add('active');
			} else {
				forPartnersButton.classList.remove('active');
			}
			if (currentScrollPos > forShoppersSectionTop - 100 && currentScrollPos < forShoppersSectionBottom - 100) {
				forShoppersButton.classList.add('active');
			} else {
				forShoppersButton.classList.remove('active');
			}
		} else {
			navbar.classList.remove('shown');
			navbar.classList.add('hidden');
		}
	}

	window.addEventListener('scroll', activeButton);
};

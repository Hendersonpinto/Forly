export const activeButton = () => {
	const navbar = document.querySelector('.navbarfixed');
	const howitworksButton = document.getElementById('howitworks');
	const contactButton = document.getElementById('contact');
	const forPartnersButton = document.getElementById('forPartners');
	const forShoppersButton = document.getElementById('forShoppers');
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

			if (currentScrollPos > howitworksSectionTop && currentScrollPos < howitworksSectionBottom) {
				howitworksButton.classList.add('active');
			} else {
				howitworksButton.classList.remove('active');
			}
			if (currentScrollPos > contactSectionTop && currentScrollPos < contactSectionBottom) {
				contactButton.classList.add('active');
			} else {
				contactButton.classList.remove('active');
			}
			if (currentScrollPos > forPartnersSectionTop && currentScrollPos < forPartnersSectionBottom) {
				forPartnersButton.classList.add('active');
			} else {
				forPartnersButton.classList.remove('active');
			}
			if (currentScrollPos > forShoppersSectionTop && currentScrollPos < forShoppersSectionBottom) {
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

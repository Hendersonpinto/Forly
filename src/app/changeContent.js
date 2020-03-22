export const changeContent = () => {
	const form = document.getElementById('contactForm');
	const log = document.querySelector('.contact');
	const logSubmit = () => {
		event.preventDefault();
		log.innerHTML = `<div class="contact2" style="margin:100px auto; text-align: center;">
	<div class="contact__title">
		<h2>We've successfully received your message - stay tuned!</h2>
		<p class="greentext">Thank you, we’ll get back to you as soon as possible</p>
	</div>
	<div class="womantext">
		<img src="./images/womantexting.svg" alt="" />
	</div>
</div>`;

		window.scroll({
			top: log.offsetTop - 60,
			left: 0,
			behavior: 'smooth'
		});
	};

	form.addEventListener('submit', logSubmit);
};

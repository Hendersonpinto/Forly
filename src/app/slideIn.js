export const slideIn = () => {
  const slideSections = document.querySelectorAll(".slide-section");

  function checkSlide() {
    const bottomScreen = window.scrollY + window.innerHeight;
    slideSections.forEach((section) => {
      const halfSection =
        section.offsetParent.offsetTop +
        section.offsetTop +
        section.offsetHeight / 4;
      const slides = section.querySelectorAll(".slide");

      if (bottomScreen > halfSection) {
        slides.forEach((slide) => slide.classList.add("active"));
      }
    });
  }

  window.addEventListener("scroll", checkSlide);
};

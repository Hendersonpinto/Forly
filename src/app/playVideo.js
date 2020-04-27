export const playVideo = () => {
  const button = document.querySelector(".video-button");
  const toggler = document.querySelector(".video__toggler");
  const videoContent = document.querySelector(".card__content");
  const video = document.querySelector(".forly-video");

  function play(e) {
    videoContent.classList.add("hidden");
    video.play();
    video.controls = true;
    toggler.classList.add("activo");
  }

  function stop(e) {
    videoContent.classList.remove("hidden");
    video.pause();
    video.controls = false;
    toggler.classList.remove("activo");
  }

  button.addEventListener("click", (e) => {
    play(e);
  });
  toggler.addEventListener("click", (e) => {
    stop(e);
  });
};

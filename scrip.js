window.addEventListener("DOMContentLoaded", () => {
  const button_qayerdan = document.querySelectorAll(".button_qayerdan");
  const viloytlar_class = document.querySelector(".viloytlar_class");
  function hideTabe() {
    viloytlar_class.style.display = "none";
  }
  function showTabe() {
    viloytlar_class.style.display = "flex";
  }
  button_qayerdan.forEach((button) => {
    button.addEventListener("click", () => {
      if (viloytlar_class.style.display === "flex") {
        hideTabe();
      } else {
        showTabe();
      }
    });
  });
  hideTabe();
  // loader
  const loader_wraper = document.querySelector(".loader_wraper");
  setTimeout(() => {
    loader_wraper.style.display = "none";
  }, 500);
});

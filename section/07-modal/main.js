// setup nav
const navBtn = document.getElementById("button-modal");
const navbar = document.getElementById("layer-overlay");
const navClose = document.getElementById("back-btn");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("vis-on");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("vis-on");
});

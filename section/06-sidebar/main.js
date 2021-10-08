const navBtn = document.getElementById("toggle-button");
const navbar = document.getElementById("sidebar");
const navClose = document.getElementById("toggle-side");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("toggle-on");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("toggle-on");
});

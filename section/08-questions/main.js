const navBtn = document.getElementById("toggle-on");
const navbar = document.getElementById("toggle-content");
navBtn.addEventListener("click", () => {
  navbar.classList.add("content-on");
});
const navBtn2 = document.getElementById("toggle-on2");
const navbar2 = document.getElementById("toggle-content2");
navBtn2.addEventListener("click", () => {
  navbar2.classList.add("content-on");
});
const navBtn3 = document.getElementById("toggle-on3");
const navbar3 = document.getElementById("toggle-content3");
navBtn3.addEventListener("click", () => {
  navbar3.classList.add("content-on");
});
////////////////////////////////////////////////////////////////
//dari john smilga
//dari john smilga
//dari john smilga

// const getElement = (selector, list) => {
//   const el = list
//     ? [...document.querySelectorAll(selector)]
//     : document.querySelector(selector);
//
//   // check if only one element
//   if (list && el.length === 1) return el[0];
//   // check if list is not empty
//   if (list && el.length > 0) return el;
//   // if not a list and element exists
//   if (!list && el) return el;
//   throw new Error(`Please double check the ${selector}`);
// };
//
// // traversing the dom
// const btns = getElement(".question-btn", true);
// const title = getElement(".title");
//
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//
//     question.classList.toggle("show-text");
//   });
// });

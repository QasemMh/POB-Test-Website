let nav = document.querySelector(".container-nav");
let logo = document.querySelector(".logo");
window.onscroll = () => {
  if (window.scrollY == 0) {
    nav.classList.remove("scrolling");
    logo.classList.remove("scrolling");
  } else {
    nav.classList.add("scrolling");
    logo.classList.add("scrolling");
  }
};

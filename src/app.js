"use strict";

const btn = document.querySelector(".switch-btn");
const preloader = document.querySelector(".preloader");

setTimeout(() => {
  preloader.classList.toggle("hide-preloader");
}, 2000);

btn.addEventListener("click", () => {
  // if (btn.classList.toggle("slide"))
  //   return btn.parentElement.firstChild.nextSibling.pause();
  // else return btn.parentElement.firstChild.nextSibling.play();

  btn.classList.toggle("slide")
    ? btn.parentElement.firstChild.nextSibling.pause()
    : btn.parentElement.firstChild.nextSibling.play();
});

const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slides");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const mobileNavigation = document.querySelector(".mobile-navigation");
const mobileNavgationButton = document.querySelector(".mobile-navigation-icon");

let slideNumber = 1;

right.addEventListener("click", () => {
  if (slides.length > slideNumber) {
    slidesContainer.style.transform = `translateX(-${slideNumber * 100}%)`;
    slideNumber++;
  } else {
    slidesContainer.style.transform = `translateX(0)`;
    slideNumber = 1;
  }
});

left.addEventListener("click", () => {
  if (slideNumber > 1) {
    slideNumber--;
    slidesContainer.style.transform = `translateX(-${
      slideNumber * 100 - 100
    }%)`;
  } else {
    slidesContainer.style.transform = `translateX(-200%)`;
    slideNumber = 3;
  }
});

mobileNavgationButton.addEventListener("click", () => {
  mobileNavigation.classList.toggle("none");
});

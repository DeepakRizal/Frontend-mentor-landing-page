const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slides");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const mobileNavigation = document.querySelector(".mobile-navigation");
const mobileNavgationButton = document.querySelector(".mobile-navigation-icon");
const buttonsContainer = document.querySelector(".buttons");

let slideNumber = 1;

//buttons dot slider
for (let i = 0; i < slides.length; i++) {
  const button = document.createElement("div");
  button.classList.add("button");
  buttonsContainer.appendChild(button);
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "black";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "lightgrey";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slidesContainer.style.transform = `translateX(-${i * 100}%)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "black";
  });
});

const changeColour = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "black";
};

right.addEventListener("click", () => {
  if (slides.length > slideNumber) {
    slidesContainer.style.transform = `translateX(-${slideNumber * 100}%)`;

    slideNumber++;
  } else {
    slidesContainer.style.transform = `translateX(0)`;
    slideNumber = 1;
  }
  changeColour();
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
  changeColour();
});

mobileNavgationButton.addEventListener("click", () => {
  mobileNavigation.classList.toggle("none");
});

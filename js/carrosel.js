import { slider1 } from "./sliderMock.js";

const sliderContainer = document.getElementById("slider1");
let currentIndex = 0;

const renderSlides = () => {
  sliderContainer.innerHTML = slider1
    .map(
      (slide) =>
        `<div class="slide" id="slide-${slide.id}">
           <img src="${slide.imgsrc}" alt="${slide.imgtitle}" title="${slide.imgtitle}">
         </div>`
    )
    .join("");
};

const updateSliderPosition = () => {
  const offset = -currentIndex * 100;
  sliderContainer.style.transform = `translateX(${offset}%)`;
};

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slider1.length) % slider1.length;
  updateSliderPosition();
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slider1.length;
  updateSliderPosition();
});

renderSlides();
updateSliderPosition();

import { slider1 } from "./sliderMock.js";

const sliderContainer = document.getElementById("slider1");
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");
let currentIndex = 0;

//  renderizar os slides
const renderSlides = () => {
  sliderContainer.innerHTML = slider1
    .map(
      (slide) =>
        `<li class="slide" id="slide-${slide.id}">
           <img src="${slide.imgsrc}" alt="${slide.imgtitle}" title="${slide.imgtitle}">
         </li>`
    )
    .join("");
};

renderSlides();

document.addEventListener("DOMContentLoaded", () => {
  function slideCarousel(sliderArray) {
    let itemsOffset;
    const totalItems = sliderArray.length;

    // Verifica o tamanho da tela e define o valor de itemsOffset
    if (window.innerWidth <= 500) {
      itemsOffset = 1;
    } else if (window.innerWidth >= 501 && window.innerWidth <= 1024) {
      itemsOffset = 2;
    } else if (window.innerWidth >= 1025 && window.innerWidth <= 1300) {
      itemsOffset = 3;
    } else if (window.innerWidth >= 1301) {
      itemsOffset = 5;
    }

    // próximo slide
    const nextSlide = () => {

      if (currentIndex >= totalItems - itemsOffset) {
        console.log("Último slide alcançado.");
        return;
      }
      currentIndex += 1; 
      console.log("Slide atual:", currentIndex + 1);
    
      let slideWidth = sliderContainer.querySelector(".slide").offsetWidth;
    
      // Ajuste para dispositivos móveis
      if (window.innerWidth <= 500) {
        slideWidth = 425; 
      } else if (window.innerWidth >= 501 && window.innerWidth <= 1024) {
        slideWidth = 780; 
      } else if (window.innerWidth >= 1025 && window.innerWidth <= 1300) {
        slideWidth = 980; 
      } else {
        slideWidth = 410;
      }
    
      const offset = -currentIndex * slideWidth;  // Cálculo do deslocamento
      
      sliderContainer.style.transform = `translateX(${offset}px)`;
      sliderContainer.style.transition = "transform 0.5s ease-in-out";
    };
    

    // slide anterior
    const prevSlide = () => {

      if (currentIndex <= 0) {
        console.log("Primeiro slide alcançado.");
        return;
      }
    
      currentIndex -= 1;
      console.log("Slide atual:", currentIndex + 1);
    
      let slideWidth = sliderContainer.querySelector(".slide").offsetWidth;
    
      // Ajuste para dispositivos móveis
      if (window.innerWidth <= 500) {
        slideWidth = 425; 
      } else if (window.innerWidth >= 501 && window.innerWidth <= 1024) {
        slideWidth = 780;
      } else if (window.innerWidth >= 1025 && window.innerWidth <= 1300) {
        slideWidth = 980; 
      } else {
        slideWidth = 410;
      }
    
      const offset = -currentIndex * slideWidth;  // Cálculo do deslocamento
      
      // Aplica o deslocamento na transformação
      sliderContainer.style.transform = `translateX(${offset}px)`;
      sliderContainer.style.transition = "transform 0.5s ease-in-out";
    };

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  slideCarousel(slider1);
});

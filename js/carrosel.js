import { slider1, slider2 } from "./sliderMock.js";

// Renderizar os slides em um container específico
const renderSlides = (tagId, slides) => {
  const sliderContainer = document.getElementById(tagId);
  sliderContainer.innerHTML = slides
    .map(
      (slide) =>
        `<li class="slide" id="slide-${slide.id}">
           <img src="${slide.imgsrc}" alt="${slide.imgtitle}" title="${slide.imgtitle}">
         </li>`
    )
    .join("");
};

// Função para configurar um slider
const slideCarousel = (sliderArray, containerId) => {
  let currentIndex = 0;
  let itemsOffset;
  const totalItems = sliderArray.length;
  const sliderContainer = document.getElementById(containerId);

  // Define os botões dinâmicos para cada slider
  const nextBtn = document.querySelector(`#${containerId}-next-button`);
  const prevBtn = document.querySelector(`#${containerId}-prev-button`);

  // Verifica o tamanho da tela e define o valor de itemsOffset
  const updateItemsOffset = () => {
    if (window.innerWidth <= 500) {
      itemsOffset = 1;
    } else if (window.innerWidth >= 501 && window.innerWidth <= 1024) {
      itemsOffset = 2;
    } else if (window.innerWidth >= 1025 && window.innerWidth <= 1300) {
      itemsOffset = 3;
    } else if (window.innerWidth >= 1301) {
      itemsOffset = 5;
    }
  };
  updateItemsOffset();

  // Função para o próximo slide
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
      slideWidth = 400;
    }
  
    const offset = -currentIndex * slideWidth;  // Cálculo do deslocamento
    
    // Aplica o deslocamento na transformação
    sliderContainer.style.transform = `translateX(${offset}px)`;
    sliderContainer.style.transition = "transform 0.5s ease-in-out";
  };

  // Adiciona os eventos de clique aos botões
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Atualiza o itemsOffset ao redimensionar a janela
  window.addEventListener("resize", updateItemsOffset);
};

// Renderiza e configura os sliders
document.addEventListener("DOMContentLoaded", () => {
  renderSlides("slider1", slider1);
  slideCarousel(slider1, "slider1");

  renderSlides("slider2", slider2);
  slideCarousel(slider2, "slider2");
});

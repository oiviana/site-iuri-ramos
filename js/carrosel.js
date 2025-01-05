import { slider1, slider2, slider3, slider4 , slider5, slider6, slider7, slider8, slider9, slider10, slider11, slider12} from "./sliderMock.js";

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
  const sliderContainer = document.getElementById(containerId);

  // Define os botões dinâmicos para cada slider
  const nextBtn = document.querySelector(`#${containerId}-next-button`);
  const prevBtn = document.querySelector(`#${containerId}-prev-button`);

  // Calcula a largura de um único slide com base no estilo CSS dinâmico
  const getSlideWidth = () => {
    const firstSlide = sliderContainer.querySelector(".slide");
    if (firstSlide) {
      return firstSlide.offsetWidth; // Apenas a largura do slide
    }
    return sliderContainer.offsetWidth; // Fallback para largura total
  };

  // Move o slider para o índice correto
  const updateSliderPosition = () => {
    const slideWidth = getSlideWidth();
    const offset = -currentIndex * slideWidth;
    sliderContainer.style.transform = `translateX(${offset}px)`;
    sliderContainer.style.transition = "transform 0.5s ease-in-out";
  };

  // Próximo slide com loop infinito
  const nextSlide = () => {
    const maxIndex = sliderArray.length - 1;

    if (currentIndex >= maxIndex) {
      currentIndex = 0; // Volta para o início
    } else {
      currentIndex += 1;
    }
    updateSliderPosition();
  };

  // Slide anterior com loop infinito
  const prevSlide = () => {
    if (currentIndex <= 0) {
      currentIndex = sliderArray.length - 1; // Vai para o final
    } else {
      currentIndex -= 1;
    }
    updateSliderPosition();
  };

  // Adiciona eventos de clique aos botões
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Atualiza o slider ao redimensionar a janela
  window.addEventListener("resize", updateSliderPosition);

  // Centraliza o primeiro slide na inicialização
  updateSliderPosition();
};


// Renderiza e configura os sliders
document.addEventListener("DOMContentLoaded", () => {

  renderSlides("slider1", slider1);
  slideCarousel(slider1, "slider1");

  renderSlides("slider2", slider2);
  slideCarousel(slider2, "slider2");

  renderSlides("slider3", slider3);
  slideCarousel(slider3, "slider3");

  renderSlides("slider4", slider4);
  slideCarousel(slider4, "slider4");

  renderSlides("slider5", slider5);
  slideCarousel(slider5, "slider5");

  renderSlides("slider6", slider6);
  slideCarousel(slider6, "slider6");

  renderSlides("slider7", slider7);
  slideCarousel(slider7, "slider7");

  renderSlides("slider8", slider8);
  slideCarousel(slider8, "slider8");

  renderSlides("slider9", slider9);
  slideCarousel(slider9, "slider9");

  renderSlides("slider10", slider10);
  slideCarousel(slider10, "slider10");

  renderSlides("slider11", slider11);
  slideCarousel(slider11, "slider11");

  renderSlides("slider12", slider12);
  slideCarousel(slider12, "slider12");
});

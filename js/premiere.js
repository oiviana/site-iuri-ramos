import { prItems } from "./sliderMock.js";

const  renderItems = (tagId, items) => {
    const Container = document.getElementById(tagId);
        Container.innerHTML = items
      .map(
        (item) =>
          `<li class="link-item" id="slide-${item.id}">
             <a href=${item.redirect}>${item.label}</a>
           </li>`
      )
      .join("");
  };

document.addEventListener("DOMContentLoaded", () => {
  renderItems("link-items-pr", prItems); 
});

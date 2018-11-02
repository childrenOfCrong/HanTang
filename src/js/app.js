import "../style/app.scss";
function component(el = "div") {
  let element = document.createElement(el);

  element.innerHTML = "Let Go !!!";
  element.classList.add("test");

  return element;
}
const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(component());

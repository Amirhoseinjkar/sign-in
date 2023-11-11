const container = document.querySelector(".container");
const btn = document.querySelector(".form-wraper-left button");
btn.addEventListener("click", () => {
  container.classList.toggle("switch");
});
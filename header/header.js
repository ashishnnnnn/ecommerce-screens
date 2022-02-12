const hemburgur = document.querySelector(".hemburgur");
const side_hidden_bar = document.querySelector(".side-hidden-bar");

const hemburgur_cross = document.querySelector(".side-hidden-bar .cross");

hemburgur.addEventListener("click", (e) => {
  e.preventDefault();
  side_hidden_bar.classList.toggle("hidden");
});

hemburgur_cross.addEventListener("click", (e) => {
  e.preventDefault();
  side_hidden_bar.classList.toggle("hidden");
});

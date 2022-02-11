const hemburgur = document.querySelector(".hemburgur");
const side_hidden_bar = document.querySelector(".side-hidden-bar");
const hemburgur_cross = document.querySelector(".side-hidden-bar .cross");

const slider = document.querySelector(".slider");

// #################################### on controling the side nav-bar
hemburgur.addEventListener("click", (e) => {
  e.preventDefault();
  side_hidden_bar.classList.toggle("hidden");
  slider.classList.toggle("z-ind-neg");
});

hemburgur_cross.addEventListener("click", (e) => {
  e.preventDefault();
  side_hidden_bar.classList.toggle("hidden");
  slider.classList.toggle("z-ind-neg");
});

// ########################################## Automatic Slicer ########################

let counter = 1;
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2500);

const filters = document.querySelector(".filters"); // The overall - bottom - filter
const sort_btn = document.querySelector(".hidden-code .sort"); // Bottom sort - btn
const cancel_sort_btn = document.querySelector(
  // Cancel Sort Btn
  ".hidden-code .sort-options .fa-times"
);
const sort_options = document.querySelector(".hidden-code .sort-options"); // That sort - option appear

const filter_btn = document.querySelector(".hidden-code .cate-filter"); // Bottom filter - btn

const filter_options = document.querySelector(".hidden-code .filter-options"); // That filter will appear

const cancel_filter_btn = document.querySelector(".hidden-code .apply");

//  ################################################ To handle sort-btn

sort_btn.addEventListener("click", (e) => {
  e.preventDefault();
  sort_options.classList.toggle("hidden");
  filters.classList.toggle("hidden");
});

cancel_sort_btn.addEventListener("click", (e) => {
  e.preventDefault();
  sort_options.classList.toggle("hidden");
  filters.classList.toggle("hidden");
});

// ############################################## To Handle Filter Btn

filter_btn.addEventListener("click", (e) => {
  e.preventDefault();
  filter_options.classList.toggle("hidden");
  filters.classList.toggle("hidden");
});

cancel_filter_btn.addEventListener("click", (e) => {
  e.preventDefault();
  filter_options.classList.toggle("hidden");
  filters.classList.toggle("hidden");
});

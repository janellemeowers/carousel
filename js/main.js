const carousel = document.getElementById("carousel");
let slides = document.getElementsByClassName("slide");

const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");

let currentSlide = 0;

function nextSlide() {
  // current slide hides
  slides[currentSlide].className = "hidden slide";

  currentSlide = currentSlide + 1;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].className = "slide";
}

const total = slides.length - 1;

function prevSlide() {
  // current slide becomes hidden
  slides[currentSlide].className = "hidden slide";

  // set the current slide as the previous one
  currentSlide -= 1;
  //if neg 1, go to last slide, reset
  if (currentSlide == -1) {
    currentSlide = total;
  }

  //make vis
  slides[currentSlide].className = "slide";
}

nextButton.addEventListener("click", () => {
  // go to next slide on click of the button
  nextSlide();
});
prevButton.addEventListener("click", () => {
  // go to previous slide on click of the button
  prevSlide();
});

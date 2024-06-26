const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".icon-left");
const btnRight = document.querySelector(".icon-right");

slider.style.transform = "scale(0.9)";
// slider.style.overflow = "hidden";
// slider.style.backgroundColor = "red";

let curSlide = 0;
const maxSlide = slides.length;
console.log("maxslide:", maxSlide);

slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

console.log("curslide:", curSlide);

gotoSlide = function (slide) {
  slides.forEach((s, i) => {
    console.log(i);
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

gotoSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  console.log("curslide:", curSlide);

  gotoSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide = curSlide - 1;
  }
  console.log(curSlide, "i am here");
  gotoSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

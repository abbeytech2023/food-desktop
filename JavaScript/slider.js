const slider = document.querySelector(".slider-a");
const slides = document.querySelectorAll(".slide-a");
const btnLeft = document.querySelector(".icon-left-a");
const btnRight = document.querySelector(".icon-right-a");

// slider.style.transform = "scale(0.4)";
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

/*************************   Second slider slider b***********************************/

const sliderB = document.querySelector(".slider-b");
const slidesB = document.querySelectorAll(".slide-b");
const btnLeftB = document.querySelector(".icon-left-b");
const btnRightB = document.querySelector(".icon-right-b");

let curSlideB = 0;
const maxSlideB = slidesB.length;
console.log("maxslide:", maxSlide);

slidesB.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

console.log("curslideB:", curSlideB);

gotoSlideB = function (slide) {
  slidesB.forEach((s, i) => {
    console.log(i);
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

gotoSlideB(0);

const nextSlideB = function () {
  if (curSlideB === maxSlideB - 1) {
    curSlideB = 0;
  } else {
    curSlideB++;
  }

  gotoSlideB(curSlideB);
};

const prevSlideB = function () {
  if (curSlideB === 0) {
    curSlideB = maxSlideB - 1;
  } else {
    curSlideB = curSlideB - 1;
  }
  console.log(curSlide, "i am here");
  gotoSlideB(curSlideB);
};

// btnRightB.addEventListener("click", () => {
//   console.log("btnright");
// });

// btnLeftB.addEventListener("click", () => {
//   console.log("btnleft");
// });
btnRightB.addEventListener("click", nextSlideB);

btnLeftB.addEventListener("click", prevSlideB);

document.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

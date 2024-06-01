const menuIcon = document.querySelector(".btn-mobile-nav");
const navigation = document.querySelector(".navigation");

menuIcon.addEventListener("click", (e) => {
  e.preventDefault();

  navigation.classList.toggle("nav-open");
  // menuIcon.style.display = "none";
});

window.addEventListener("scroll", function () {
const parallax = document.getElementById("parallax");
const offset = window.scrollY;
parallax.style.backgroundPositionY = offset * -0.8 + "px";
});
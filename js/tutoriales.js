window.addEventListener("scroll", function () {
  const parallaxSections = document.querySelectorAll(".parallax-header");

  parallaxSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const offset = rect.top;
    section.style.backgroundPositionY = offset * 0.3 + "px";
  });
});

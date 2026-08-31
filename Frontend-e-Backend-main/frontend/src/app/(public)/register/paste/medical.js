document.querySelectorAll(".image-grid img").forEach((image) => {
  image.addEventListener("click", () => image.classList.toggle("selected"));
});
// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.style.height = hamburger.classList.contains("open") ? "calc(100vh - 70px)" : "0";
});

// slideshow
const nextSlide = document.querySelector("#next");
nextSlide.addEventListener("click", () => {
    const currentSlide = document.querySelector(".slides img.active");
    const next = currentSlide.nextElementSibling || document.querySelector(".slides img:first-child");
    currentSlide.classList.remove("active");
    next.classList.add("active");
});
const prevSlide = document.querySelector("#prev");
prevSlide.addEventListener("click", () => {
    const currentSlide = document.querySelector(".slides.active");
    const prev = currentSlide.previousElementSibling || document.querySelector(".slides img:last-child");
    currentSlide.classList.remove("active");
    prev.classList.add("active");
});

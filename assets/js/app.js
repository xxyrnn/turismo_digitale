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
    const currentSlide = document.querySelector(".slides .active");
    const currentDot = document.querySelector(".dots-container .active");
    const nextSlide = currentSlide.nextElementSibling || document.querySelector(".slides img:first-child");
    const nextDot = currentDot.nextElementSibling || document.querySelector(".dot:first-child");
    currentDot.classList.remove("active");
    currentSlide.classList.remove("active");
    nextSlide.classList.add("active");
    nextDot.classList.add("active");
});
const prevSlide = document.querySelector("#prev");
prevSlide.addEventListener("click", () => {
    const currentSlide = document.querySelector(".slides .active");
    const currentDot = document.querySelector(".dots-container .active");
    const prevSlide = currentSlide.previousElementSibling || document.querySelector(".slides img:last-child");
    const prevDot = currentDot.previousElementSibling || document.querySelector(".dot:last-child");
    currentSlide.classList.remove("active");
    currentDot.classList.remove("active");
    prevSlide.classList.add("active");
    prevDot.classList.add("active");
});

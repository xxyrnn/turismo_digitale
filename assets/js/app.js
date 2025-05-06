// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.style.height = hamburger.classList.contains("open") ? "calc(100vh - 70px)" : "0";
});

// dropdown menu
const villagesBtn = document.getElementById("villages");
const dropdown = document.querySelector(".dropdown");
const villagesSpan = document.querySelector("#villages span");
villagesBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
    villagesSpan.style.transform = dropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
});
// close dropdown on click outside
document.addEventListener("click", (event) => {
    if (!villagesBtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
        villagesSpan.style.transform = "rotate(0deg)";
    }
});

// slideshow
// next slide
function slideToNext() {
    const currentSlide = document.querySelector(".slides .active");
    const currentDot = document.querySelector(".dots-container .active");
    const nextSlide = currentSlide.nextElementSibling || document.querySelector(".slides .slide:first-child");
    const nextDot = currentDot.nextElementSibling || document.querySelector(".dot:first-child");
    currentSlide.classList.remove("active");
    currentDot.classList.remove("active");
    nextSlide.classList.add("active");
    nextDot.classList.add("active");
}

const next = document.querySelector(".slideshow-controls #next");
next.addEventListener("click", slideToNext);
// prev slide
const prev = document.querySelector(".slideshow-controls #prev");
prev.addEventListener("click", () => {
    const currentSlide = document.querySelector(".slides .active");
    const currentDot = document.querySelector(".dots-container .active");
    const prevSlide = currentSlide.previousElementSibling || document.querySelector(".slides .slide:last-child");
    const prevDot = currentDot.previousElementSibling || document.querySelector(".dot:last-child");
    currentSlide.classList.remove("active");
    currentDot.classList.remove("active");
    prevSlide.classList.add("active");
    prevDot.classList.add("active");
});
// auto slide
let slideInterval = setInterval(slideToNext, 5000);
// stop auto slide on hover
const slideshow = document.querySelector(".slideshow");
slideshow.addEventListener("mouseover", () => {
    clearInterval(slideInterval);
});
// start auto slide on mouseout
slideshow.addEventListener("mouseout", () => {
    slideInterval = setInterval(slideToNext, 5000);
});
// dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        const currentSlide = document.querySelector(".slides .active");
        const currentDot = document.querySelector(".dots-container .active");
        const index = Array.from(dots).indexOf(dot);
        const targetSlide = document.querySelectorAll(".slides .slide")[index];
        currentSlide.classList.remove("active");
        currentDot.classList.remove("active");
        targetSlide.classList.add("active");
        dot.classList.add("active");
    });
});

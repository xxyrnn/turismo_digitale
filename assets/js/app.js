/* hamburger */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.style.height = hamburger.classList.contains("open") ? "100vh" : "0";
});

/* dropdown menu */
const villagesBtn = document.getElementById("villages");
const dropdown = document.querySelector(".dropdown");
const villagesSpan = document.querySelector("#villages span");
const navItems = document.querySelectorAll(".nav-items a:not(#villages):not(.dropdown a)");
villagesBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
    villagesBtn.classList.toggle("open");
    hamburger.style.opacity = "0";
    hamburger.style.pointerEvents = "none";
});
// close dropdown on arrow click
const returnBtn = document.getElementById("returnBtn");
returnBtn.addEventListener("click", () => {
    dropdown.classList.remove("show");
    villagesBtn.classList.remove("open");
    hamburger.style.opacity = "1";
    hamburger.style.pointerEvents = "initial";
});
// close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!villagesBtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
        villagesBtn.classList.remove("open");
        hamburger.style.opacity = "1";
        hamburger.style.pointerEvents = "initial";
    }
});

/* slideshow */
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
// previous slide
function slideToPrev() {
    const currentSlide = document.querySelector(".slides .active");
    const currentDot = document.querySelector(".dots-container .active");
    const prevSlide = currentSlide.previousElementSibling || document.querySelector(".slides .slide:last-child");
    const prevDot = currentDot.previousElementSibling || document.querySelector(".dot:last-child");
    currentSlide.classList.remove("active");
    currentDot.classList.remove("active");
    prevSlide.classList.add("active");
    prevDot.classList.add("active");
}

if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    // auto slide
    let slideInterval = setInterval(slideToNext, 5000);
    // restart auto slide on mouseout
    const slideshow = document.querySelector(".slideshow");
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
}

/* form */
const inputFields = document.querySelectorAll("form input:not(#kids)");
const errorMessage = document.getElementById("errorMsg");
let errorInputs = new Set();
inputFields.forEach((input) => {
    input.addEventListener("blur", () => {
        if (input.value.trim() === "") {
            input.previousElementSibling.classList.add("error");
            errorMessage.style.opacity = "1";
            errorInputs.add(input);
        } else {
            errorInputs.delete(input);
            input.previousElementSibling.classList.remove("error");

            if (errorInputs.size === 0)
                errorMessage.style.opacity = "0";
        }
    });
});

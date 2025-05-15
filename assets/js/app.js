/* hamburger */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.style.height = hamburger.classList.contains("open") ? "100vh" : "0";
});

/* dropdown menu */
const paesi = document.getElementById("paesi");
const dropdown = document.querySelector(".dropdown");
paesi.addEventListener("click", () => {
    paesi.classList.toggle("open");
    dropdown.classList.toggle("show");
    hamburger.style.opacity = "0";
    hamburger.style.pointerEvents = "none";
});
// close dropdown...
function closeDropdown() {
    paesi.classList.remove("open");
    dropdown.classList.remove("show");
    hamburger.style.opacity = "1";
    hamburger.style.pointerEvents = "initial";
}
// ...on arrow click
const freccia = document.getElementById("freccia");
freccia.addEventListener("click", closeDropdown);
// ...when clicking outside
document.addEventListener("click", (event) => {
    if (!paesi.contains(event.target) && !dropdown.contains(event.target))
        closeDropdown();
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

const slideshow = document.querySelector(".slideshow");

if (slideshow !== null) {
    // auto slide
    let slideInterval = setInterval(slideToNext, 5000);
    // stop auto slide on mouseover
    slideshow.addEventListener("mouseover", () => clearInterval(slideInterval));
    // restart auto slide on mouseout
    slideshow.addEventListener("mouseout", () => slideInterval = setInterval(slideToNext, 5000));
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
const inputFields = document.querySelectorAll("form input:not(#bambini), textarea");
const msgErrore = document.getElementById("msgErrore");

if (inputFields !== null) {
    let inputErrati = new Set();

    inputFields.forEach((input) => {
        input.addEventListener("blur", () => {
            if (input.value.trim() === "") {
                input.previousElementSibling.classList.add("error");
                // msgErrore.style.opacity = "1";
                msgErrore.style.display = "block";
                inputErrati.add(input);
            } else {
                inputErrati.delete(input);
                input.previousElementSibling.classList.remove("error");

                if (inputErrati.size === 0) {
                    // msgErrore.style.opacity = "0";
                    msgErrore.style.display = "none";
                }
            }
        });
    });
}

/* accordion */
const headers = document.querySelectorAll(".accordion-header");

if (headers !== null) {
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const isActive = item.classList.contains("active");

            // close all items
            document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));

            // toggle current item
            if (!isActive)
                item.classList.add("active");
        });
    });
}

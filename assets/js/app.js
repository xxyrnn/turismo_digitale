// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");
// const navMenu = document.querySelector("nav ul");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.style.height = hamburger.classList.contains("open") ? "calc(100vh - 70px)" : "0";
});

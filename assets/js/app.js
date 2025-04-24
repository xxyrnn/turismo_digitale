// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.style.display = hamburger.classList.contains("open") ? "flex" : "none";
});

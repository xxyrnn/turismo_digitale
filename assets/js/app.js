// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.style.width = hamburger.classList.contains("open") ? "100%" : "0";
    // navMenu.style.right = hamburger.classList.contains("open") ? "0" : "-100%";
});

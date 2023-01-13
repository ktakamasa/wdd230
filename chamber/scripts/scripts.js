//get last modified date
let lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

// responsive hamburger menu
const menubutton= document.querySelector("#menu-button");
const menuitems = document.querySelector("nav ul");

menubutton.addEventListener("click", () => {
    menubutton.classList.toggle("open");
    menuitems.classList.toggle("open");
});
const menu = document.querySelector(".menu");
const navLink = document.querySelector(".nav-link");

menu.addEventListener("click", () => {
    console.log("clicked");
    navLink.classList.toggle("active");
    console.log(navLink.className);
});

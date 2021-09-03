const hamburger=document.querySelector(".hamburger");
const navLink = document.querySelectorAll(".nav-link");
const menu=document.querySelector(".menu");


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('show');
    menu.classList.toggle('show');
});


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("show");
    menu.classList.remove("show");
}
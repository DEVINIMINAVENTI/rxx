const navTogglera = document.querySelector(".nav-toggler");

navTogglera.addEventListener('click', navToggle);

function navToggle(){

    const nav = document.querySelector(".navbar");
    nav.classList.toggle("closenav");
   
}
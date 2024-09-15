let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");
const rating1 = document.querySelector(".rating1");
const child = document.querySelectorAll(".child");
const feedback_section = document.querySelector(".feedback-section");
const btn = document.querySelector("#btn");



window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


var swiper = new swiper(".mySwiper", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnIneraction: false,
    },
    breakpoints: {
        640:{
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});




















// search form
let searchBtn = document.querySelector('.search-btn');
searchBtn.onclick = () =>{
    searchBtn.classList.toggle('fa-times');
    document.querySelector('.search-form').classList.toggle('active');
    document.querySelector('.login-form').classList.remove('active');
    menuBtn.classList.remove('fa-times');
    document.querySelector('.menu').classList.remove('active');
};

// login form
let userBtn = document.querySelector('.user-btn');
userBtn.onclick = () =>{
    document.querySelector('.login-form').classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    document.querySelector('.search-form').classList.remove('active');
    menuBtn.classList.remove('fa-times');
    document.querySelector('.menu').classList.remove('active');
};

// menu
let menuBtn = document.querySelector('.menu-btn');
menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    document.querySelector('.menu').classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    document.querySelector('.search-form').classList.remove('active');
    document.querySelector('.login-form').classList.remove('active');
};

// change theme
let themeBtn = document.querySelector('.theme-btn');
themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
};

// controls videos
let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        document.querySelector('.controls-videos .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video').src = src;
    });
});

// on scroll
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    document.querySelector('.search-form').classList.remove('active');
    document.querySelector('.login-form').classList.remove('active');
    menuBtn.classList.remove('fa-times');
    document.querySelector('.menu').classList.remove('active');
};


// swiper 
var swiper = new Swiper(".myReview", {
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay: 2500,
        dasibleOnInteraction: false,
    },
    breakpoints:{
        450:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
  


// =>
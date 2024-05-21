// start nav bar
document.addEventListener('DOMContentLoaded', function () {

    const menubar = document.querySelector('.nav-toggle');
    const togglebtn = document.querySelector('.toggle-btn');
    const body = document.querySelector('.body');

    togglebtn.addEventListener('click', () => {
        menubar.classList.toggle('open');
        body.classList.toggle('fixed');
        // menubar.classList.toggle('bg-white');

    });




});



// end nav bar 



//start tabs and swipe


function currentSlide(n) {
    // Get all slides
    var slides = document.getElementsByClassName("mySlides");
    var tab = document.getElementsByClassName("dot");
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
        tab[i].classList.remove("apply");


    }
    // Show the selected slide
    document.getElementById("slide" + n).classList.add("active-slide");
    document.getElementById("tab" + n).classList.add("apply");
}

document.querySelectorAll('.dot').forEach((dot) => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
    });
});










//end tabs and swipe





const workFlow = new Swiper('.workflow-section .swiper', {
    // Optional parameters
    direction: 'horizontal',
    // slidesPerView: 3.3,
    spaceBetween: 25,

    breakpoints: {
        // when window width is >= 320px
        270: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        767: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        991: {
            slidesPerView: 3.3,
            spaceBetween: 25
        },

    },
    loop: false,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});




const validate = new Swiper('.validate-section .swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// const title = document.querySelectorAll("#title path");

// for (let i=0; i < title.length; i++) {
//     console.log(`Letter ${i} is ${title[i].getTotalLength()}`);
// }

var swiper = new Swiper(document.querySelector(".slide-content"), {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor:"true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});


const swiper = new Swiper('.services-swiper', {
    slidesPerView: 4,
    spaceBetween: 32,
    // loop: true,
    pagination: {
        el: '.services-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.-convert-swiper-next',
        prevEl: '.convert-swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        567: {
            slidesPerView: 2,
            spaceBetween: 10

        },

        900: {
            slidesPerView: 3,
            spaceBetween: 10

        },
        1200: {
            slidesPerView: 4,
        },
    }


});








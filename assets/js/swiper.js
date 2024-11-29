
const swiper = new Swiper('.indispensable-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.indispensable-pagination',
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
            slidesPerView: 3,
        },
    }


});








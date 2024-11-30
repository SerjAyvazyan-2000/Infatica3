
const swiper = new Swiper('.proxy-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
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
            spaceBetween: 16
        },
        567: {
            slidesPerView: 3,

        },
        700: {
            slidesPerView: 2.7,
            spaceBetween: 34,

        },

        900: {
            slidesPerView: 3,
            spaceBetween: 16

        },
        1200: {
            slidesPerView: 4,
        },
    }


});



const swiperScarping = new Swiper('.scraping-swiper', {
    slidesPerView: 3,
    spaceBetween: 32,
    loop:true,
    pagination: {
        el: '.scraping-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.-convert-swiper-next',
        prevEl: '.convert-swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 16
        },
        567: {
            slidesPerView: 2,

        },
        700: {
            slidesPerView:2.4 ,
            spaceBetween: 16,

        },


        900: {
            slidesPerView: 2,
            spaceBetween: 16,

        },
        1200: {
            slidesPerView: 3,
        },
    }


});

const swiperDatasets = new Swiper('.datasets-swiper', {
    slidesPerView: 4,
    spaceBetween: 32,
    // loop:true,
    pagination: {
        el: '.datasets-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.-convert-swiper-next',
        prevEl: '.convert-swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 16
        },
        567: {
            slidesPerView: 2,

        },
        700: {
            slidesPerView:2.7 ,
            spaceBetween: 16,

        },

        900: {
            slidesPerView: 3,
            spaceBetween: 16

        },
        1200: {
            slidesPerView: 4,
        },
    }


});


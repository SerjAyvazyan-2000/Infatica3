
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
            slidesPerView: 2,

        },

        900: {
            slidesPerView: 3,

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

        900: {
            slidesPerView: 2,
            spaceBetween: 16,

        },
        1200: {
            slidesPerView: 3,
        },
    }


});
// if(swiperScarping.slidesPerView === 3 || swiperScarping.slidesPerView < 2) {
//     swiperScarping.loop = true;
//     swiperScarping.slidesPerView = 2
// }


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

        900: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 4,
        },
    }


});


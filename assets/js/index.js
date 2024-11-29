const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');

    }


});

window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});


const listItems = document.querySelectorAll('.locations-list-item');

listItems.forEach(item => {
    item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
    });
})


const menuLinks = document.querySelectorAll('.menu-list-link');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Отключаем переход по ссылке

        const linkDataVal = link.getAttribute('data-val'); // Получаем значение data-val текущей ссылки
        const targetSubBlock = document.querySelector(`.sub-block[data-val="${linkDataVal}"]`); // Ищем соответствующий sub-block

        // Если у ссылки уже есть класс active, удаляем его и у sub-block
        if (link.classList.contains('active')) {
            link.classList.remove('active');
            if (targetSubBlock) {
                targetSubBlock.classList.remove('active');
            }
        } else {
            // Удаляем классы active у всех ссылок и блоков
            menuLinks.forEach(link => link.classList.remove('active'));
            document.querySelectorAll('.sub-block').forEach(block => block.classList.remove('active'));

            // Добавляем active текущей ссылке и её sub-block
            link.classList.add('active');
            if (targetSubBlock) {
                targetSubBlock.classList.add('active');
            }
        }
    });
});

// const menuItems = document.querySelectorAll('.menu-list-item');
// const headerBody = document.querySelector('.header-body');
//
// // Добавляем обработчик событий для каждого элемента
// menuItems.forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         // Добавляем класс active к .header-body при наведении
//         headerBody.classList.add('active');
//     });
//
//     item.addEventListener('mouseleave', () => {
//         // Убираем класс active у .header-body, когда убирается hover
//         headerBody.classList.remove('active');
//     });
// });


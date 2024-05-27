(function () {
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header-green-shop'),
        menu = document.querySelector('.menu-mobile-container');
    burger.onclick = () => {
        if (!header.classList.contains('no')) {
            if (header.classList.contains('menu-opened')) {
                header.classList.add('no');
                setTimeout(() => {
                    menu.classList.add('d-none');
                    header.classList.remove('no');
                    document.documentElement.style.overflow = 'auto';
                }, 550)
            } else {
                header.classList.add('yes');
                setTimeout(() => {
                    menu.classList.remove('d-none');
                    header.classList.remove('yes');
                    document.documentElement.style.overflow = 'hidden';
                }, 250);
            }
            header.classList.toggle('menu-opened');
        }
    }
}());
function hamburger() {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        mobileLink = document.querySelectorAll('.mobile-link');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    mobileLink.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

export default hamburger;
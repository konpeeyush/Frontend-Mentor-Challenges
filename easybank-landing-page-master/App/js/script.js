const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {

    if (header.classList.contains('open')) {
        //close menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        fadeElems.forEach(elem => {
            elem.classList.remove('fade-in');
            elem.classList.add('fade-out');
        })
    }
    else {
        //open menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function (elem) {
            elem.classList.remove('fade-out');
            elem.classList.add('fade-in');
        });

    }
}
);
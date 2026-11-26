'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileScreen = window.matchMedia('(max-width: 760px)');

function setMenuOpen(open) {
    navigation.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
}

function updateNavigation() {
    menuButton.hidden = !mobileScreen.matches;
    setMenuOpen(!mobileScreen.matches);
}

if (menuButton && navigation) {
    updateNavigation();
    mobileScreen.addEventListener('change', updateNavigation);

    menuButton.addEventListener('click', () => {
        setMenuOpen(navigation.hidden);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileScreen.matches && !navigation.hidden) {
            setMenuOpen(false);
            menuButton.focus();
        }
    });
}

const year = document.querySelector('#year');
if (year) {
    year.textContent = String(new Date().getFullYear());
}

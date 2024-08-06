// Toogle class active

const navbarNav = document.querySelector('.navbar-nav');


// ketika menu diklik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// toogle class active for search form

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// klik di luar element
const sb = document.querySelector('#search-button');

const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
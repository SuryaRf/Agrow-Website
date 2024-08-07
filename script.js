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
const sc = document.querySelector('#shopping-cart-button');
const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


// toogle class active for shopping cart

const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartButton = document.querySelector('#shopping-cart-button');

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}


// Modal Box

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelector('.item-detail-button');


itemDetailButton.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
}

// klik tombol close

document.querySelector('.close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

// klik di luar modal

const modal = document.querySelector('.item-detail-modal');
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};
// var moment = require("moment");
// import moment from "moment";

const menuItems = document.querySelector('.menuItems');
const searchInput = document.querySelector('.searchInput');
const openSearch = document.getElementsByClassName('openSearch');
const closeSearch = document.getElementById('closeSearch');
const theDateField = document.querySelector('.theDate');

const d = new Date().toLocaleDateString('bn');

theDateField.innerHTML = d;

console.log(openSearch)

for (const searchOpen of openSearch) {
    searchOpen.addEventListener('click', ()=>{
        menuItems.classList.remove('d-flex');
        menuItems.classList.add('d-none');
        searchInput.classList.remove('d-none');
        searchInput.classList.add('d-flex');
    })
}

// Closing search input and showing menu items
closeSearch.addEventListener('click', ()=>{
    menuItems.classList.remove('d-none');
    menuItems.classList.add('d-flex');
    searchInput.classList.remove('d-flex');
    searchInput.classList.add('d-none');
})




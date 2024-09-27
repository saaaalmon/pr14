'use strict'
const tab_titles = document.querySelectorAll('.tab_title');
const tab_item = document.querySelectorAll('.tab_item');
tab_titles.forEach((item, index) => {
    item.addEventListener('click', function () {
        document.querySelector('.tab_title.active').classList.remove('active');
        item.classList.add('active');
        document.querySelector('.tab_item.active').classList.remove('active');
        tab_item[index].classList.add('active');
    })
})
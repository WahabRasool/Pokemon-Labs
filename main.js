// Сохраняем ссылки на неизменяемые элементы
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let sliderList = document.querySelector('.slider_list');
let items = document.querySelectorAll('.slider_item');

function moveNext() {
    sliderList.appendChild(items[0]);
    items = document.querySelectorAll('.slider_item');
}

function movePrev() {
    sliderList.prepend(items[items.length - 1]);
    items = document.querySelectorAll('.slider_item');
}


document.addEventListener("click", function(event) {
    let target = event.target.closest('button');
    if (target === next) {
        moveNext();
    } else if (target === prev) {
        movePrev();
    }
});


window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        moveNext();
    } else {
        movePrev();
    }
});
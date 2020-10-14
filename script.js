const gallery = document.getElementById("gallery");
const galleryEl = document.getElementsByClassName("gallery-el");
const angleLeft = document.getElementById("angle-left");
const angleRight = document.getElementById("angle-right");

let elWidth = window.innerWidth / 3;

gallery.style.left = 0 + 'px';

let step = 0;

let elsOnSlideWidth = elWidth * 3;

if (window.innerWidth < 900) {
    elsOnSlideWidth = elWidth;
    elWidth = window.innerWidth;
}

const move = elWidth;

const rightBorder = elWidth * galleryEl.length - elsOnSlideWidth;

for (let i = 0; i < galleryEl.length; i++) {
    galleryEl[i].style.minWidth = elWidth + "px";
}

const moveLeft = () => { 
    step += move;
    if (step > 0) {
        step = -rightBorder;
    };
	gallery.style.left = step + 'px';
};

const moveRight = () => {
    step += -move;
    if (step < -rightBorder) {
        step = 0;
    }
    gallery.style.left = step + 'px';
};

angleLeft.onclick = moveLeft;
angleRight.onclick = moveRight;

/*

1 доделать стили
2 найти ошибку в слайдере
3 сделать слайдер в новом лендинге

*/
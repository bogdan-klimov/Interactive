const gallery = document.getElementById("gallery");
const angleLeft = document.getElementById("angle-left");
const angleRight = document.getElementById("angle-right");

let step = 0;
const move = 1020;

const moveLeft = () => { 
    step += move;
    if (step > 1200) {
        step = -2040;
    };
	gallery.style.marginLeft = step + 'px';
};

const moveRight = () => {
    step += -move;
    if (step < -2040) {
        step = 1020;
    }
    gallery.style.marginLeft = step + 'px';
};

angleLeft.onclick = moveLeft;
angleRight.onclick = moveRight;


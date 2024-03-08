// Evento de scroll para reproducir audio

let song = new Audio('./song/risa.mp3');
let song2 = new Audio('./song/huesos1.mp3');
let song3 = new Audio('./song/huesos2.mp3');
let song4 = new Audio('./song/susurro.mp3');

window.addEventListener('DOMContentLoaded', (event) => {
    song.play();
});

window.addEventListener('click', (event) => {
    song4.play();
});

window.addEventListener('scroll', function () {
    let scrollVar = window.scrollY;
    

    if (scrollVar === 0) {
        song.play();
        song2.pause();
        song4.pause();

    } else if (scrollVar > 800 && scrollVar < 1600) {
        song2.play();
        song3.pause();
        song4.pause();

    } else if (scrollVar > 1600) {
        song3.play();
        song.pause();
        song2.pause();
        song4.pause();
    }
});


let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 33.75;
let speed = 25;

let progress = setInterval(() => {
    progressValue = progressValue + 0.25;
    valueContainer.textContent = `${progressValue}`;
    progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressValue * 6}deg,
        #cadcff ${progressValue * 6}deg
    )`
    if (progressValue == progressEndValue) {
        clearInterval(progress)
    }
}, speed);

// in progress
const title = document.getElementById("title");
const play = document.getElementById("play-card-container");
const game = document.getElementsByClassName(".game-container");

play.addEventListener("click", () => {
    moveUp(play);
});

show();

function moveUp(divId) {
    let div = divId;
    div.style.top = div.offsetTop - 10 + "px";
    if (div.offsetTop > -div.clientHeight) {
        setTimeout(function(){moveUp(divId)}, 8);
    }
}

let int = setInterval(show, 30);
let load = 0;
function show() {
    load++;
    if (load > 99) { clearInterval(int); }
    game.style.opacity = scale(load, 0, 100, 0, 1);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

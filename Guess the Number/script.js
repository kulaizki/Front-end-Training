// in progress
const title = document.getElementById("title");
const play = document.getElementById("play-card-container");

play.addEventListener("click", function(){moveUp(play)});

function moveUp(divId) {
    let div = divId;
    div.style.top = div.offsetTop - 10 + "px";
    if (div.offsetTop > -div.clientHeight) {
        setTimeout(function(){moveUp(divId)}, 8);
    }
}

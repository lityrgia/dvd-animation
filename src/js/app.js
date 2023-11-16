const canvas = document.getElementById("canvas")
canvas.height = 950;
canvas.width = 1900;
const ctx = canvas.getContext("2d")

let rectSize = 140;
let rectx = (canvas.width / 2) - (rectSize / 2);
let recty = (canvas.height / 2) - (rectSize / 2);
let rectColor = "yellow"

let count = 0;

let dx = 3;
let dy = -1.6;

addEventListener("mousedown", mouseMoveHandler, false)

function mouseMoveHandler(e) {
    rectx = e.clientX - rectSize / 2;
    recty = e.clientY - rectSize / 2;
}

function drawRect() {
    switch (count) {
        case 0:
            rectColor = "yellow";
            break;
        case 1:
            rectColor = "blue";
            break;
        case 2:
            rectColor = "red";
            break;
        case 3:
            rectColor = "green";
            break;
        case 4:
            rectColor = "brown";
            break;
        case 5:
            rectColor = "violet";
            break;
    }

    if (count > 5 ) {
        count = 0;
    }

    ctx.beginPath()
    ctx.rect(rectx, recty, rectSize, rectSize)
    ctx.fillStyle = rectColor
    ctx.fill()
    ctx.font = "50px arial"
    ctx.fillStyle = "black"
    ctx.fillText("DVD", rectx + 20, recty + 70)
    ctx.closePath()

    rectx += dx;
    recty += dy;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRect()

    if (rectx < 0 || rectx > canvas.width - rectSize) {
        dx = -dx;
        count++
    }

    if (recty < 0 || recty > canvas.height - rectSize) {
        dy = -dy;
        count++
    }

    requestAnimationFrame(draw)
}

draw()
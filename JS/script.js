px = py = 10;
xv = yv = 0;
grav = 0.5;
onG = false;
holdLeft = holdRight = false;
plat = [];

window.onload = function () {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    setInterval(update, 1000 / 30);
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    for (i = 0; i < 50; i++) {
        plat.push(
            {
                x: -1000,
                y: 450,
                w: 3050,
                h: 100,
            }
        );
        // plat.push(
        //     {
        //         x: Math.random()*canv.width,
        //         y: Math.random()*canv.height,
        //         w: Math.random()*100 + 30,
        //         h: Math.random()*30 + 20
        //     }
        // );
    }
}

function update() {
    if (holdLeft) {
        xv = -5;
    }
    if (holdRight) {
        xv = 5;
    }
    px += xv;
    py += yv;
    if (onG) {
        xv *= 0.8;
    } else {
        yv += grav;
    }

    onG = false;
    for (i = 0; i < 50; i++) {
        if (px > plat[i].x && px < plat[i].x + plat[i].w &&
            py > plat[i].y && py < plat[i].y + plat[i].h) {
            py = plat[i].y;
            onG = true;
        }
    }

    ctx.fillStyle = "blueviolet";
    ctx.fillRect(0, 0, canv.width, canv.height);
    ctx.fillStyle = "black";
    ctx.fillRect(px - 5, py - 30, 30, 30);
    for (i = 0; i < 50; i++) {
        ctx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    }
}

function keyDown(event) {
    switch (event.keyCode) {
        case 37:
            holdLeft = true;
            break;
        case 38:
            if (onG) {
                yv = -10;
            }
            break;
        case 39:
            holdRight = true;
            break;
    }
}

function keyUp(event) {
    switch (event.keyCode) {
        case 37:
            holdLeft = false;
            break;
        case 38:
            if (yv < -3) {
                yv = -3;
            }
            break;
        case 39:
            holdRight = false;
            break;
    }
}
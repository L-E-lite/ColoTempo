let perso = document.getElementById('perso');
let x = 10;
let y = 100;
let inJump = false;
let fall = false;

let myTimer = null;

function stopTimer() {
    clearInterval(myTimer);
    console.log('stop timer');
    inJump = false;
    fall = false;
}

function move(event) {
    console.log('event.keyCode=' + event.keyCode);
    switch (event.keyCode) {
        case 39:
            x += 10;
            perso.style.left = x + 'px';
            break;
        case 37:
            x -= 10;
            perso.style.left = x + 'px';
            break;
        case 38:
            if (!inJump) {
                inJump = true;
                myTimer = setInterval(() => {
                    if ( y == 200) {
                        fall = true;
                    }
                    if (fall) {
                        if (y > 100) {
                            y--;
                            perso.style.bottom = y + 'px';
                        } else {
                            stopTimer();
                        }
                    } else {
                        y++;
                        perso.style.bottom = y + 'px';
                    }
                }, 5);
            }
            break;
    }
}

window.onload = function () {
    document.onkeydown = move;
}


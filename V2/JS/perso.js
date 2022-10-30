let perso = document.getElementById('perso');
let x = 10;
let y = 100;
let inJump = false;

let myTimerUp = null;
let myTimerDown = null;

/************** V1 *****************/
function stopTimerUp() {
    clearInterval(myTimerUp);
    console.log('stop timer');
}

function stopTimerDown() {
    clearInterval(myTimerDown);
    console.log('stop timer');
    inJump = false;
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
                if ((y >= 100)) {
                    myTimerUp = setInterval(() => {
                        if ((y < 200)) {
                            console.log(y);
                            y++;
                            perso.style.bottom = y + 'px';
                            console.log(y);
                        } else {
                            stopTimerUp(myTimerUp);
                        }
                    }, 5);
                }
                if (y = 200) {
                    myTimerDown = setInterval(() => {
                        if (y > 100) {
                            y--;
                            perso.style.bottom = y + 'px';
                        } else {
                            stopTimerDown(myTimerDown);
                        }
                    }, 5);
                }
            }
            break;
    }
}

window.onload = function () {
    document.onkeydown = move;
}

/* V1 Saut "téléporter" 
Gravité 
Redescencdre progressivement -> timer
V2 Saut progressif 
*/
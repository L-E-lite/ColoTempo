// function move_right(event) {

//     document.getElementById("perso").style.left = event.clientX + 'px';
// }

// document.addEventListener("click", move_right);
let perso = document.getElementById('perso');
let x = 0;
let y = 0;

function move(event) {
    console.log('event.keyCode=' + event.keyCode);
    if (event.keyCode == 39) {
        x += 10;
        perso.style.left = (parseInt(x)) + 'px';
    }

    if (event.keyCode == 37) {
        x -= 10;
        perso.style.left = (parseInt(x)) + 'px';
    }

    if (event.keyCode == 38) {
        y += 100;
        perso.style.bottom = (parseInt(y)) + 'px';
        
        while (y != 0) {
            
            perso.style.bottom = (parseInt(y)) + 'px';
            y -=1;
        }
    }
}



document.onkeydown = move;

/* V1 Saut "téléporter" 
Gravité 
Redescencdre progressivement -> timer
V2 Saut progressif 
*/
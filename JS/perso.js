// function move_right(event) {

//     document.getElementById("perso").style.left = event.clientX + 'px';
// }

// document.addEventListener("click", move_right);

let perso = document.getElementById('perso');
let x = 0;
let y = 0;
let ymax = 100;



function gravity(gravY) {
    
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
            y += 100;
            perso.style.bottom = y + 'px';
            for (let i = 0; i < ymax; i++) {
                setTimeout(() => {
                    perso.style.bottom = y + 'px';
                    y -= 1;
                    console.log("coucou");
                }, 2000);
            }
            break;
    }
}



document.onkeydown = move;

/* V1 Saut "téléporter" 
Gravité 
Redescencdre progressivement -> timer
V2 Saut progressif 
*/
// let perso = document.getElementById('perso');
// let x = 10;
// let y = 100;
// let inJump = false;

// let myTimer = null;

// /************** V1 *****************/

// function stopTimer() {
//     clearInterval(myTimer);
//     console.log('stop timer');
//     inJump = false;
// }

// function move(event) {
//     console.log('event.keyCode=' + event.keyCode);
//     switch (event.keyCode) {
//         case 39:
//             x += 10;
//             perso.style.left = x + 'px';
//             break;
//         case 37:
//             x -= 10;
//             perso.style.left = x + 'px';
//             break;
//         case 38:
//             if (!inJump) {
//                 inJump = true;
//                 y = 200;
//                 perso.style.bottom = y + 'px';
//                 myTimer = setInterval(() => {
//                     if (y > 100) {
//                         y--;
//                         perso.style.bottom = y + 'px';
//                     } else {
//                         stopTimer();
//                     }
//                 }, 5);
//             }
//             break;
//     }
// }

// window.onload = function () {
//     document.onkeydown = move;
// }

// /* V1 Saut "téléporter" 
// Gravité 
// Redescencdre progressivement -> timer
// V2 Saut progressif 
// */
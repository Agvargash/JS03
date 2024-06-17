const rosado = 'pink'
const naranjo = 'orange'
const celeste = 'lightblue'
const morado = 'purple'
const gris = 'gray'
const cafe = 'brown'

const elemento2 = document.getElementById('key2')
const elemento = document.getElementById('key')

function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
  }

document.addEventListener('keydown', function (event) {
    
    if (event.key === 'a') {pintar(elemento, rosado)
    /* Cambiar a color 1 */
    } else if (event.key === 's') {pintar(elemento, naranjo)
    /* Cambiar a color 2 */
    } else if (event.key === 'd') {pintar(elemento, celeste)}
    else if (event.key === 'q') {pintar(elemento2, morado)}
    else if (event.key === 'w') {pintar(elemento2, gris)}
    else if (event.key === 'e') {pintar(elemento2, cafe)}
    })
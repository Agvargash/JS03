function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
  }

    const blue = document.getElementById("blue")
    blue.addEventListener("click", () => {pintar(blue, 'black')});
    const red = document.getElementById("red")
    red.addEventListener("click", () => {pintar(red, 'black')});
    const green = document.getElementById("green")
    green.addEventListener("click", () => {pintar(green, 'black')});
    const yellow = document.getElementById("yellow")
    yellow.addEventListener("click", () => {pintar(yellow, 'black')});
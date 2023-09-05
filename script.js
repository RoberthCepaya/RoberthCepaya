// Obtener todas las letras individuales
const letters = document.querySelectorAll("h1 span");

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para aplicar un color aleatorio a cada letra
function applyRandomColorEffect() {
    letters.forEach(letter => {
        const randomColor = getRandomColor();
        letter.style.backgroundColor = randomColor;
    });
}

// Restablecer el color original al retirar el cursor
function resetColor() {
    letters.forEach(letter => {
        letter.style.backgroundColor = "transparent";
    });
}

// Agregar eventos de ratón
letters.forEach(letter => {
    letter.addEventListener("mouseenter", applyRandomColorEffect);
    letter.addEventListener("mouseleave", resetColor);
});

const button = document.querySelector("button")
const inputX = document.getElementById("x")
const inputY = document.getElementById("y")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", verificarCoordenadas)

function verificarCoordenadas() {
    const x = inputX.valueAsNumber
    const y = inputY.valueAsNumber

    if (!inputX.value || !inputY.value) {
        alert("Digite um valor valido.")
        return
    }

    if (x === 0 && y === 0) {
        paragrafoResultado.textContent = "Origem"
    } else if (x === 0) {
        paragrafoResultado.textContent = "Eixo Y"
    } else if (y === 0) {
        paragrafoResultado.textContent = "Eixo X"
    } else if (x > 0 && y > 0) {
        paragrafoResultado.textContent = "Q1"
    } else if (x < 0 && y > 0) {
        paragrafoResultado.textContent = "Q2"
    } else if (x < 0 && y < 0) {
        paragrafoResultado.textContent = "Q3"
    } else if (x > 0 && y < 0) {
        paragrafoResultado.textContent = "Q4"
    }
}

let darkBtn = document.querySelector("#darkmode")
let documento = document.querySelector("html")

function alternarModoOscuro(params) {
    documento.classList.toggle("dark")
}


darkBtn.addEventListener("click", alternarModoOscuro)
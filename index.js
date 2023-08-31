var SetaEsquerda = window.document.getElementById("seta_esquerda")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var SetaDireita = window.document.getElementById("seta_direira")
var button = window.document.getElementById("button")

function RolarParaDireira() {
 leonardo.style = "display:none"
 samantha.style = "display:flex"
 SetaDireita.style = "display:none"
 SetaEsquerda.style = "display:flex; margin-top:90px"
}

function RolarParaEsquerda() {
    samantha.style = "display:none"
    leonardo.style = "display:flex"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex"
}

const entradaTexto = document.querySelector(".areaDelTexto");
const mensaje = document.querySelector(".areaDelmensaje");
function haceEncriptacion() {
    const textoEncriptado = encriptar(entradaTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    entradaTexto.value = "";
}
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */
function encriptar(textoAEncriptar) {
    let codigoEncriptar = [["e","enter"],["i","imes"],["a" , "ai"],["o","ober"],["u","ufat"]];
    textoAEncriptar = textoAEncriptar.toLowerCase();
    for (let i = 0; i < codigoEncriptar.length; i++) {
        if (textoAEncriptar.includes(codigoEncriptar[i][0])) {
            textoAEncriptar = textoAEncriptar.replaceAll(codigoEncriptar[i][0], codigoEncriptar[i][1]);
        }
    }
    return textoAEncriptar    
}
function hacerDesencriptacion() {
    const textoDesencriptado = desencriptar(entradaTexto.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    entradaTexto.value = "";
}
function desencriptar(textoADesencriptar) {
    let codigoEncriptar = [["e","enter"],["i","imes"],["a" , "ai"],["o","ober"],["u","ufat"]];
    textoADesencriptar = textoADesencriptar.toLowerCase();
    for (let i = 0; i < codigoEncriptar.length; i++) {
        if (textoADesencriptar.includes(codigoEncriptar[i][1])) {
            textoADesencriptar = textoADesencriptar.replaceAll(codigoEncriptar[i][1], codigoEncriptar[i][0]);
        }
    }
    return textoADesencriptar    
}
function copiarTexto() {
    var contenido = document.getElementById('mensaje');
    contenido.select();
    document.execCommand('copy');
    contenido.deselect()
}

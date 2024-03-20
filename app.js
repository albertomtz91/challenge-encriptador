const textArea = document.querySelector(".text-area");
const mensaje  = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {

        if(stringEncriptada.includes(matrizCodigo[i][0])){

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar(stringDEsncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDEsncriptada = stringDEsncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {

        if(stringDEsncriptada.includes(matrizCodigo[i][1])){

            stringDEsncriptada = stringDEsncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDEsncriptada
}

function btncopiar(stringtextcopy){

    stringtextcopy = mensaje.value
    textArea.value=stringtextcopy
    mensaje.value="";


    return stringtextcopy
}

function validatexto(stringtext){
    let textVacio=mensaje.length
    if(textVacio !=0){
        stringtext=mensaje.value
    }else{
        alert("Debes ingresar algún texto");
    }
    return stringtext
}

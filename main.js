function encriptar(text) {
    return text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
};

function desencriptar(text) {
    return text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
};

function copiar(){
    let copyText = document.querySelector(".text-input-salida").value;
    navigator.clipboard.writeText(copyText);

}

function tieneMayusculaOEspecial(palabra) {
    let tieneMayusculaOEspecial = false;
    let caracteres = palabra.split("");
    for (const c of caracteres) {
        valorCaracter = c.codePointAt(0);
        if (valorCaracter < 97 || valorCaracter > 122) {
            tieneMayusculaOEspecial = true;
            break;
        }
    }
    return tieneMayusculaOEspecial;
}

function testFunction(isEncription) {
    let texto = document.querySelector("#input-texto").value;

    if(tieneMayusculaOEspecial(texto) === true){
        alert("solo letras minúsculas sin acentos")
    } else{
        document.getElementById("myDIV").style.display = "none";
        document.getElementById("salida").style.display = "block";
        let textoCifrado = isEncription.target.value == "true" ? encriptar(texto) : desencriptar(texto);
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#input-texto").value = "";
    }
   
}

let botonEncriptar = document.querySelector("#btn-encriptar"); botonEncriptar.onclick = testFunction
let botonDesen = document.querySelector("#btn-desencriptar"); botonDesen.onclick = testFunction;
let botonCopiar= document.querySelector("#btn-copiar"); botonCopiar.onclick = copiar;
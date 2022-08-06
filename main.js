function encriptar() {
    document.getElementById("myDIV").style.display = "none";
    document.getElementById("salida").style.display = "block";
    let texto = document.querySelector("#input-texto").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value="";

}

let botonEncriptar = document.querySelector("#btn-encriptar"); botonEncriptar.onclick = encriptar;

function desencriptar (){ 
    let texto = document.querySelector("#input-texto").value; 
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".text-input-salida").value = textoCifrado; 
    document.querySelector("#input-texto").value="";

}

let botonDesen= document.querySelector("#btn-desencriptar"); botonDesen.onclick = desencriptar;
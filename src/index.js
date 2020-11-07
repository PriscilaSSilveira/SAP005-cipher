import cipher from './cipher.js';
function clickEncode(event) {
    event.preventDefault()
    let frase = document.getElementById("texto").value
    frase = frase.toUpperCase()
    let offset = parseInt(document.getElementById("deslocamento").value)
    let retorna = cipher.encode(offset, frase);


    document.getElementById("texto").value = retorna;
    console.log(retorna)
}
document.getElementById("myBtn").addEventListener("click", clickEncode)

function clickDecode(event) {
    event.preventDefault()
    let frase = document.getElementById("texto").value
    frase = frase.toUpperCase()
    let offset = parseInt(document.getElementById("deslocamento").value)
    let retornaD = cipher.decode(offset, frase);

    document.getElementById("texto").value = retornaD;
}

document.getElementById("dBtn").addEventListener("click", clickDecode)
//console.log(cipher);





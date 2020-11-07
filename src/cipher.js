//recebe o botao e adiciona um evento que recebe a function


function encode(offset, frase) {

    let criptografar
    let textoFinal = ""

    if (frase == null || offset == null || frase == "" || offset == "") {
        throw new TypeError("ops... digite apenas letras")

    }
    else {
        for (let index = 0; index < frase.length; index++) {

            const pegaNum = (frase.charCodeAt(index) - 65 + offset) % 26 + 65;

            criptografar = String.fromCharCode(pegaNum)
            textoFinal += criptografar

        }
    }



    return textoFinal
    //document.write(type(criptografar))
}



function decode(offset, frase) {

    let descriptografar
    let textoFinal = ""
    if (frase == null || offset === null || frase == "" || offset === "") {
        throw new TypeError("ops... digite apenas letras")
    }
    else {

        for (let index = 0; index < frase.length; index++) {

            const pegaNum = (frase.charCodeAt(index) + 65 - offset) % 26 + 65;

            descriptografar = String.fromCharCode(pegaNum)
            textoFinal += descriptografar
        }

    }
    return textoFinal

}
export default {
    encode, decode
}
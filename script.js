var textInput = document.querySelector("#input_texto");
var outInput = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    document.getElementById('output').innerHTML = '<textarea readonly id="input_texto">' + resultCripto +
    '</textarea>' + '<button class="button_copiar" id="copiar" onclick="copiar()">Copiar</button>'    

}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    document.getElementById('output').innerHTML = '<textarea readonly id="input_texto">' + resultDescripto +
    '</textarea>' + '<button class="button_copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function copiar(){
    var textoCop = document.getElementById('input_texto')

textoCop.select();
document.execCommand('copy');
alert("Texto Copiado");

}
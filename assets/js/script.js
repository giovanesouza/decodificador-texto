/*
Durante estas duas semanas, vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

let typedText = document.querySelector("[name=typed-text]"); // Textarea
let message = document.querySelector("#text-right"); // Área com texto criptografado/descriptografado

let withoudMessage = document.querySelector(".withoud-message");
let hasMessage = document.querySelector("#has-message"); // Área responsável pelo texto encriptado/desencriptado


let btnEncriptar = document.querySelector("#btn-criptografar"); // Pega o botão de criptografar
let btnDescriptografar = document.querySelector("#btn-descriptografar");// Pega o botão de Descriptografar

let btnCopy = document.querySelector("#btn-copy");



btnCopy.addEventListener("click", copyText);

//
btnEncriptar.addEventListener("click", () =>{

   //   Verifica se o campo contém conteúdo, se houver, realiza a criptografia
   if (typedText.value != "") {
    withoudMessage.style.display = "none";
    
    hasMessage.classList.remove('d-none');
    hasMessage.classList.add('has-message');
    
  } else {
    withoudMessage.style.display = "block";
    hasMessage.classList.remove('has-message');
    hasMessage.classList.add('d-none');
    alert("ATENÇÃO: É necessário digitar um texto antes de encriptar/desencriptar");
  }


  btnCriptografar();

});



btnDescriptografar.addEventListener("click", () => {
   //   Verifica se o campo contém conteúdo, se houver, descriptografa
   if (typedText.value != "") {
    withoudMessage.style.display = "none";
    
    hasMessage.classList.remove('d-none');
    hasMessage.classList.add('has-message');
    
  } else {
    withoudMessage.style.display = "block";
    hasMessage.classList.remove('has-message');
    hasMessage.classList.add('d-none');
    alert("ATENÇÃO: É necessário digitar um texto antes de encriptar/desencriptar");
  }

  btnDesencriptar();

});



// Função para copiar o texto
function copyText() {
  var copy = message.innerHTML; // Seleciona o elemento a ser copiado
  navigator.clipboard.writeText(copy); // Faz a cópia do conteúdo
}



// CRIPTOGRAFA
function btnCriptografar() {
  const textoCriptografado = criptografar(typedText.value); // Pega o conteúdo do textarea para encriptar
  message.innerHTML = textoCriptografado; // Envia o texto para área de conteúdo encriptado

  typedText.value = ""; // Limpa o texto digitado
}


// DESENCRIPTAR
function btnDesencriptar() {
  const textoDesencriptado = desencriptar(typedText.value); // Pega o conteúdo do textarea para encriptar
  message.innerHTML = textoDesencriptado; // Envia o texto para área de conteúdo encriptado

  typedText.value = ""; // Limpa o texto digitado
}



// CRIPTOGRAFA
function criptografar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();

  // Percorre a matriz
  for (let i = 0; i < matrizCodigo.length; i++) {
    // Busca um elemento (neste caso as vogais), caso localize realiza a substituição (conversão pedida)
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      ); // PARÂMETROS: 1. Campo de referência, campo de substituição
    }
  }

  return stringEncriptada;
}

// console.table(matrizCodigo); // Exibe a matriz no console em forma de tabela



function criptografar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();

  // Percorre a matriz
  for (let i = 0; i < matrizCodigo.length; i++) {
    // Busca um elemento (neste caso as vogais), caso localize realiza a substituição (conversão pedida)
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      ); // PARÂMETROS: 1. Campo de referência, campo de substituição
    }
  }

  return stringEncriptada;
}





// DESENCRIPTAR
function desencriptar(stringDesencriptada) {

  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringDesencriptada = stringDesencriptada.toLowerCase();

  // Percorre a matriz
  for (let i = 0; i < matrizCodigo.length; i++) {
    // Verifica se contém a chave de criptografia
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      ); // PARÂMETROS: 1. Campo de referência, campo de substituição - substitui as chaves pelas vogais
    }
  }

  return stringDesencriptada;
}

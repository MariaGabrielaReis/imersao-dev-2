var numSecreto = parseInt(Math.random() * 11);
let tentativas = 2;

function Chutar() {
  let chute = parseInt(document.getElementById("valor").value);
  let elementoResultado = document.getElementById("resultado");

  if (tentativas > 0) {
    if (chute === numSecreto) {
      elementoResultado.innerHTML = "Acertou!";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Insira um valor entre 0 e 10!";
    } else if (chute > numSecreto) {
      elementoResultado.innerHTML = `Errou! O número secreto é menor que ${chute} e agora restam ${tentativas} tentativas`;
      tentativas--;
    } else {
      elementoResultado.innerHTML = `Errou! O número secreto é maior que ${chute} e agora restam ${tentativas} tentativas`;
      tentativas--;
    }
  } else {
    elementoResultado.innerHTML = `Acabaram as tentativas, o nº secreto era ${numSecreto}!`;
  }
}
var cartas = [{
    nome: "React Native",
    atributos: {
      idade: 50,
      hype: 90,
      poder: 90
    }
  },
  {
    nome: "Flutter",
    atributos: {
      idade: 20,
      hype: 70,
      poder: 95
    }
  },
  {
    nome: "Java",
    atributos: {
      idade: 90,
      hype: 30,
      poder: 85
    }
  },
  {
    nome: "Objective-C",
    atributos: {
      idade: 80,
      hype: 20,
      poder: 85
    }
  }
]

var cartaMaquina, cartaJogador

function sortearCarta(){
  var numCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numCartaMaquina]
  
  var numCartaJogador = parseInt(Math.random() * cartas.length)
  while(numCartaJogador === numCartaMaquina){
   numCartaJogador = parseInt(Math.random() * cartas.length)
  }
  cartaJogador = cartas[numCartaJogador]
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  exibirOpcoes()
}

function exibirOpcoes(){
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += `<input type="radio" name="atributo" value="${atributo}"> ${atributo}`
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
  var atributos = document.getElementsByName('atributo')
  
  for (var i=0; i<atributos.length; i++){
    if(atributos[i].checked){
      return atributos[i].value
    }
  }
  
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
 var elementoResultado = document.getElementById('resultado')
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMáquina = cartaMaquina.atributos[atributoSelecionado]
  
  if(valorCartaJogador > valorCartaMáquina){
    elementoResultado.innerHTML = "Você venceu!"
  } else if(valorCartaMáquina > valorCartaJogador){
    elementoResultado.innerHTML = "Você perdeu!"
  } else {
    elementoResultado.innerHTML = "Empatou!"
  }
  
  console.log(cartaJogador)
  console.log(cartaMaquina)
}
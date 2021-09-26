var cartas = [{
    nome: "React Native",
  imagem: 'https://www.pngkit.com/png/detail/80-804117_react-logo-react-native-icon-png.png',
    atributos: {
      idade: 50,
      hype: 90,
      poder: 90
    }
  },
  {
    nome: "Flutter",
    imagem: 'https://logowik.com/content/uploads/images/flutter5786.jpg',
    atributos: {
      idade: 20,
      hype: 70,
      poder: 95
    }
  },
  {
    nome: "Java",
    imagem: 'https://symbols.getvecta.com/stencil_25/38_java.b6d5a6719d.jpg',
    atributos: {
      idade: 90,
      hype: 30,
      poder: 85
    }
  },
  {
    nome: "Objective-C",
    imagem: 'https://www.vippng.com/png/detail/200-2006651_adobe-illustrator-objective-c-circle.png',
    atributos: {
      idade: 80,
      hype: 20,
      poder: 85
    }
  }
]

var cartaMaquina, cartaJogador

function sortearCarta(){
  document.getElementById('carta-maquina').innerHTML = "";
  document.getElementById('carta-maquina').style.backgroundImage = "none";
  document.getElementById('carta-jogador').innerHTML = "";
  document.getElementById('resultado').innerHTML = "";

  var numCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numCartaMaquina]
  
  var numCartaJogador = parseInt(Math.random() * cartas.length)
  while(numCartaJogador === numCartaMaquina){
   numCartaJogador = parseInt(Math.random() * cartas.length)
  }
  cartaJogador = cartas[numCartaJogador]
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  exibirCartaJogador()
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
    elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu!</p>"
  } else if(valorCartaMáquina > valorCartaJogador){
    elementoResultado.innerHTML = "<p class='resultado-final'>Você perdeu!</p>"
  } else {
    elementoResultado.innerHTML = "<p class='resultado-final'>Empatou!</p>"
  }
  document.getElementById('btnJogar').disabled = true
  exibirCartaMaquina()
  document.getElementById('btnSortear').disabled = false
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById('carta-jogador')
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var opcoes = '<div id="opcoes" class="carta-status">'
  var opcoesTexto = ""
  
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += `<input type="radio" name="atributo" value="${atributo}"> ${atributo}: ${cartaJogador.atributos[atributo]} <br>`
  }
  
  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>` 
  
  divCartaJogador.innerHTML = moldura + nome + opcoes + opcoesTexto + "</div>"
}

function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var opcoes = '<div id="opcoes" class="carta-status">'
  var opcoesTexto = ""
  
  for(var atributo in cartaMaquina.atributos){
    opcoesTexto += `<p name="atributo" value="${atributo}"> ${atributo}: ${cartaMaquina.atributos[atributo]} </p>`
  }
  
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>` 
  
  divCartaMaquina.innerHTML = moldura + nome + opcoes + opcoesTexto + "</div>"
}
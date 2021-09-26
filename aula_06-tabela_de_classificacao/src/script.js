var maby = {
  nome: "Maby",
  vitorias: 1,
  empates: 7,
  derrotas: 1,
  pontos: 0
};
var wallace = {
  nome: "Wallace",
  vitorias: 1,
  empates: 7,
  derrotas: 1,
  pontos: 0
};
maby.pontos = calculaPontos(maby);
wallace.pontos = calculaPontos(wallace);
var jogadores = [maby, wallace];

function calculaPontos(jogador) {
  let pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresTela(jogadores) {
  var elemento = "";

  for (let i = 0; i < jogadores.length; i++) {
    elemento += `
    <tr>
        <td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitorias}</td>
        <td>${jogadores[i].empates}</td>
        <td>${jogadores[i].derrotas}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
    </tr>
      `;
  }

  var tabela = document.getElementById("tabelaJogadores");
  tabela.innerHTML = elemento;
}

exibeJogadoresTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;

  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;

  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;

  exibeJogadoresTela(jogadores);
}
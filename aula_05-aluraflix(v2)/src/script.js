let filmes = [];
function adicionarFilme() {
  let novoFilme = document.getElementById("filme").value;

  if (
    novoFilme.endsWith(".jpg") ||
    novoFilme.endsWith(".png") ||
    novoFilme.endsWith(".jpeg")
  ) {
    filmes.push(novoFilme);
    mostrarFilmes();
  } else {
    console.error("Endereço de filme inválido");
  }

  document.getElementById("filme").value = "";
}

function mostrarFilmes() {
  document.getElementById("listaFilmes").innerHTML = "";
  let elementoListaFilmes = document.getElementById("listaFilmes");

  console.log(filmes);
  filmes.forEach((filme) => {
    elementoListaFilmes.innerHTML += `<img src='${filme}'>`;
  });
}

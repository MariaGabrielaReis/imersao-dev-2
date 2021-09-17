function converterDolar() {
  let valorElemento = document.getElementById("valor");

  let dolar = parseFloat(valorElemento.value);
  let real = dolar * 5.31;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  elementoValorConvertido.innerHTML = `O resultado em real é R$ ${real.toFixed(
    2
  )}`;
}

function converterEuro() {
  let valorElemento = document.getElementById("valor");

  let euro = parseFloat(valorElemento.value);
  let real = euro * 6.23;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  elementoValorConvertido.innerHTML = `O resultado em real é R$ ${real.toFixed(
    2
  )}`;
}
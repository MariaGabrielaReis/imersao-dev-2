// criar variáveis
var notaPrimeiroSemestre = 10
var notaSegundoSemestre = 10

// fazer os cálculos
var media = (notaPrimeiroSemestre + notaSegundoSemestre) /2
var mediaArredondada = media.toFixed(1)

// imprimir o resultado
console.log("A média final é " + mediaArredondada)

// ver se foi aprovado ou não
if(mediaArredondada >= 6 ){
  console.log("Parabéns, você foi APROVADO(A)")
} else {
  console.log("Que pena, você foi REPROVADO(A)")
}
/*
Exercício 3: Resposta de uma Solicitação

Enunciado:
- Crie um enum chamado Resposta para representar as respostas de uma solicitação.
- O enum deve possuir os seguintes valores:
  Sim = 1
  Nao = "NAO"
  Talvez = "TALVEZ"
  - Crie uma variável chamada respostaUsuario do tipo Resposta.
  - Atribua à variável o valor Resposta.Nao.
- Imprima o valor armazenado em respostaUsuario no console.

Desafio extra:
- Altere o valor de respostaUsuario para Resposta.Sim.
- Imprima novamente o resultado e observe como o enum pode representar valores numéricos e textuais.
*/

enum Resposta {
  Sim = 1,
  Nao = "NAO",
  Talvez = "TALVEZ",
}

var respostaUser1 = Resposta.Nao;
var respostaUser2 = Resposta.Sim;
var respostaUser3 = Resposta.Talvez;

console.log(respostaUser1);
console.log(respostaUser2);
console.log(respostaUser3);

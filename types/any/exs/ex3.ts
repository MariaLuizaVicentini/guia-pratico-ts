/*
 * Desafio 3 - Analisador de Dados
    * - Crie uma função que receba um array contendo valores de tipos diferentes.
    * - Percorra o array e analise cada elemento individualmente.
    * - Se o elemento for uma string, exiba seu conteúdo.
    * - Se for um número, verifique se é par ou ímpar.
    * - Se for um booleano, exiba uma mensagem indicando se seu valor é verdadeiro ou falso.
    * - Para qualquer outro tipo de valor, exiba uma mensagem informando que o tipo não foi identificado.

*/

type arrayMixes = any[];

function dataAnalyst(list: arrayMixes) {
  var i: number;

  for (i = 0; i < list.length; i++) {
    if (typeof list[i] === "string") {
      console.log(list[i]);
    } else if (typeof list[i] === "number") {
      var num = list[i] % 2 === 0 ? "par" : "ímpar";
      console.log(`O número é: ${num}`);
    } else if (typeof list[i] === "boolean") {
      console.log(`Booleano = ${list[i]}`);
    } else {
      console.log("O tipo não foi identificado!");
    }
  }
}

dataAnalyst(["uva", 2, false]);

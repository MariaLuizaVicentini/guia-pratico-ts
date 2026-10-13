/**
 * Desafio 1 - Processador de Dados
 * - Crie uma função que receba um valor de qualquer tipo e verifique seu conteúdo.
 * - Se o valor for uma string, exiba a quantidade de caracteres.
 * - Se for um número, calcule o dobro do valor.
 * - Se for um booleano, inverta seu valor.
 * - Para qualquer outro tipo de valor, apenas exiba o conteúdo recebido.
 */

function dataProcess(valor: any): void {
  if (typeof valor === "string") {
    console.log(`Quantidade de caracteres: ${valor.length}`);
  } else if (typeof valor === "number") {
    const result = valor * 2;
    console.log(`O dobro do número recebido é: ${result}`);
  } else if (typeof valor === "boolean") {
    console.log(`Valor recebido: ${valor}`);
    console.log(`Valor invertido: ${!valor}`);
  } else {
    console.log(`Conteúdo recebido:`, valor);
  }
}

dataProcess("Malu");
dataProcess(2);
dataProcess(true);

/*
    Esses são os casos de uso em que o else é executado

*/ 
// dataProcess(null);
// dataProcess({ nome: "Malu" });
// dataProcess([1, 2, 3]);
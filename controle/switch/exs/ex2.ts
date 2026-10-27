/**
 * Desafio 2 - Classificador de Dias da Semana
 *
 * - Crie uma função que receba um número de 1 a 7, representando um dia da semana.
 * - Utilize switch para identificar o dia correspondente.
 * - Para os números de 1 a 5, exiba o nome do dia e informe que é um dia útil.
 * - Para o número 6, exiba "Sábado - Final de semana".
 * - Para o número 7, exiba "Domingo - Final de semana".
 * - Caso o número recebido não esteja entre 1 e 7, exiba uma mensagem de erro.
 */

// Crie uma função que receba um número de 1 a 7, representando um dia da semana.

function fail(msg: string) {
  throw new Error(msg);
}

function exibeDiaSemana(num: number) {
  if (!num) {
    fail("ERRO! O número não pode ser vazio.");
  }

  switch (num) {
    case 1:
      console.log("Dia util");
      break;
    case 2:
      console.log("Dia util");
      break;
    case 3:
      console.log("Dia util");
      break;
    case 4:
      console.log("Dia util");
      break;
    case 5:
      console.log("Dia util");
      break;
    case 6:
      console.log("sabado");
      break;
    case 7:
      console.log("domingo");
      break;
    default:
      console.log("O número precisa ser de 1 a 7");
      break;
  }
}

exibeDiaSemana(5);
exibeDiaSemana(7);
exibeDiaSemana(8);
exibeDiaSemana(6);

/*
15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
por hora trabalhada.
*/

let GANHO_DIARIO: number = 8 * 25;
console.log(GANHO_DIARIO);

function process(dias: number): void {
  console.log(`O salario do funcionario e: ${dias * GANHO_DIARIO}`);
}

process(20);

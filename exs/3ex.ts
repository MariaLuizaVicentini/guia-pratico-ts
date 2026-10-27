/*
    3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
    final uma mensagem.
    Ex:
    Nome do Funcionário: Maria do Carmo
    Salário: 1850,45
    O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.


*/

function exibeMsgs(nome: string, sal: string): void {
  console.log(`Nome do Funcionário: ${nome}`);
  console.log(`Salário: ${sal}`);
  console.log(`O funcionário ${nome} tem um salário de R$${sal} em Junho`);
}

exibeMsgs("Malu", "1.000,00");


/*
13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento.
*/

let salario: number = 3500;
let percentualAumento: number = 0.15;

// Cálculo do aumento e do novo salário
let valorAumento: number = salario * percentualAumento;
let salarioNovo: number = salario + valorAumento;

console.log("Salário anterior: R$", salario);
console.log("Novo salário com 15% de aumento: R$", salarioNovo);
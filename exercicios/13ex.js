"use strict";
/*
13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let salario = 3500;
let percentualAumento = 0.15;
// Cálculo do aumento e do novo salário
let valorAumento = salario * percentualAumento;
let salarioNovo = salario + valorAumento;
console.log("Salário anterior: R$", salario);
console.log("Novo salário com 15% de aumento: R$", salarioNovo);

"use strict";
/*
6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
sucessor.
Ex:
Digite um número: 9
O antecessor de 9 é 8
*/
Object.defineProperty(exports, "__esModule", { value: true });
function antSuc(num) {
    console.log(`O antecessor de ${num} é ${num - 1}`);
    console.log(`O sucessor de ${num} é ${num + 1}`);
}
antSuc(9);

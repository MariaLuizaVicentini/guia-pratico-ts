"use strict";
/*
32) Um programa de vida saudável quer dar pontos atividades físicas que podem
ser trocados por dinheiro. O sistema funciona assim:

- Cada hora de atividade física no mês vale pontos

- até 10h de atividade no mês:
        - ganha 2 pontos por hora
    - de 10h até 20h de atividade no mês:
        - ganha 5 pontos por hora
    - acima de 20h de atividade no mês:
     - ganha 10 pontos por hora

     - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)

     Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let horas = 30;
if (horas < 10) {
    const pontos = horas * 2;
    const reais = pontos * 0.05;
    console.log(`Você tem ${pontos} pontos, e ganhou R$${reais}`);
}
else if (horas <= 20) {
    const pontos = horas * 5;
    const reais = pontos * 0.05;
    console.log(`Você tem ${pontos} pontos, e ganhou R$${reais}`);
}
else {
    const pontos = horas * 10;
    const reais = pontos * 0.05;
    console.log(`Você tem ${pontos} pontos, e ganhou R$${reais}`);
}

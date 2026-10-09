"use strict";
/*
    "enum" nos permite declarar um conjunto de valores/constantes predefinidos
    
    Existem três formas de se trabalhar com ele no TS:
- Numeric (Numérico)
- String (Texto)
- Heterogeneous (Heterogêneo)
*/
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Numéricos - (Mapeiam nomes para números)
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
    DiaDaSemana[DiaDaSemana["Domingo"] = 7] = "Domingo";
})(DiaDaSemana || (DiaDaSemana = {}));
// 1. Numérios -  Caso o valor inicial não sejapassado na declaração, o tsc fará um autoincremento de +1 iniciando em 0 até o último elemento do enum
var DiaDaSemanaSemValorInicial;
(function (DiaDaSemanaSemValorInicial) {
    DiaDaSemanaSemValorInicial[DiaDaSemanaSemValorInicial["Segunda"] = 0] = "Segunda";
    DiaDaSemanaSemValorInicial[DiaDaSemanaSemValorInicial["Terca"] = 1] = "Terca";
    DiaDaSemanaSemValorInicial[DiaDaSemanaSemValorInicial["Quarta"] = 2] = "Quarta";
    DiaDaSemanaSemValorInicial[DiaDaSemanaSemValorInicial["Quinta"] = 3] = "Quinta";
    DiaDaSemanaSemValorInicial[DiaDaSemanaSemValorInicial["Sexta"] = 4] = "Sexta";
    DiaDaSemanaSemValorInicial[DiaDaSemanaSemValorInicial["Sabado"] = 5] = "Sabado";
    DiaDaSemanaSemValorInicial[DiaDaSemanaSemValorInicial["Domingo"] = 6] = "Domingo";
})(DiaDaSemanaSemValorInicial || (DiaDaSemanaSemValorInicial = {}));
console.log(`Hoje é: ${DiaDaSemanaSemValorInicial[4]}-feira`);
var DiaDaSemanaComValorInicial;
(function (DiaDaSemanaComValorInicial) {
    DiaDaSemanaComValorInicial[DiaDaSemanaComValorInicial["Segunda"] = 1] = "Segunda";
    DiaDaSemanaComValorInicial[DiaDaSemanaComValorInicial["Terca"] = 2] = "Terca";
    DiaDaSemanaComValorInicial[DiaDaSemanaComValorInicial["Quarta"] = 3] = "Quarta";
    DiaDaSemanaComValorInicial[DiaDaSemanaComValorInicial["Quinta"] = 4] = "Quinta";
    DiaDaSemanaComValorInicial[DiaDaSemanaComValorInicial["Sexta"] = 5] = "Sexta";
    DiaDaSemanaComValorInicial[DiaDaSemanaComValorInicial["Sabado"] = 6] = "Sabado";
    DiaDaSemanaComValorInicial[DiaDaSemanaComValorInicial["Domingo"] = 7] = "Domingo";
})(DiaDaSemanaComValorInicial || (DiaDaSemanaComValorInicial = {}));
console.log(`Hoje é: ${DiaDaSemanaComValorInicial[4]}-feira`);
// 2. String (Cada chave é mapeada explicitamente para uma string)
var Direcao;
(function (Direcao) {
    Direcao["Cima"] = "CIMA";
    Direcao["Baixo"] = "BAIXO";
    Direcao["Esquerda"] = "ESQUERDA";
    Direcao["Direita"] = "DIREITA";
})(Direcao || (Direcao = {}));
// 3. Heterogêneo (Mistura números e strings - pouco recomendado na prática, mas existe)
var RespostaBooleana;
(function (RespostaBooleana) {
    RespostaBooleana[RespostaBooleana["Sim"] = 1] = "Sim";
    RespostaBooleana["Nao"] = "NAO";
})(RespostaBooleana || (RespostaBooleana = {}));
// Testando o uso prático:
const hoje = DiaDaSemana.Segunda;
console.log(hoje); // Imprime: 1
const direcaoAtual = Direcao.Cima;
console.log(direcaoAtual); // Imprime: "CIMA"

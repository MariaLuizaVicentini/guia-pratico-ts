"use strict";
/*
  Type - Void
    - é uma function sem retorno
    - É usada quando uma função executa uma ação, como atualizar o estado de uma variavel por exemplo
    - como escrever algum valor (logs)
    - Não devolve nenhum dado útil para o chamador, embora possa retornar algo
*/
Object.defineProperty(exports, "__esModule", { value: true });
function log() {
    console.log("Sem retorno");
}
log();
/*
  Assim como em outras linguagens, quando vc define que uma função retorna  " void " , vc está dizendo ao TS que o valor retornado por ela deve ser ignorado
*/
function mostrarAlerta(msg) {
    console.log(msg);
    // Opcional: return; (apenas pra sair da função)
    // Se colocarmos: return msg; (TSC vai emitir um erro)
}
/*

  VOID x UNDEFINED

  Void
  - diz ao TS que o retorno da function void não importa

  Undefined
  - diz o TS que o retorno é um valor real
*/
/*
  Flexibilidade em CallBacks
    Uma função void pode aceitar ou ser substituida por funções que retornam qualquer coisa
*/
// Pense no forEach( )
const nums = [1, 2, 3];
const duplicados = [];
// O forEach espera um callback que retorne `void`
nums.forEach((num) => {
    return duplicados.push(num * 2); // .push() retorna um número!
});
/*

  Se o TS fosse rigido demais com o void, os callbacks nao existiriam
*/ 

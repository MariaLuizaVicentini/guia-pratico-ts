"use strict";
/*
    do ... while:
        - é uma estrutura de repetição que executa um bloco de código pelo menos uma vez
        - e depois verifica se deve repeti-lo
        - sua principal característica é que a condição é avaliada depois da execução do bloco
        - diferente do "while" que verifica a condição antes de executar um bloco
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Sintaxe - do ... while
    do {
        // código executado
    } while (condicao)
*/
let condicao = false;
do {
    console.log("carregando....");
} while (condicao);
console.log("===============================");
/*
O do... while não retorna nada
Ele é uma instrução de controle de fluxo
*/
var contador = 1;
do {
    console.log("DEBUG", contador);
    contador = contador + 1;
} while (contador <= 3);
console.log("===============================");
var i = 0;
do {
    console.log("antes", i);
    i = i + 1;
    console.log("depois", i);
} while (i <= 4);
console.log("===============================");

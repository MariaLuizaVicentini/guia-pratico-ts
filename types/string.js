"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cor = "verde";
// console.log("cor verde: ", cor)
cor = 'azul';
// console.log("cor azul: ", cor)
let nome = "Maria Luiza";
let idade = 23;
// template string
let sentence = `Olá Mundo, meu nome é ${nome}, tenho ${idade} anos de idade`;
console.log(sentence);
// Trabalhando com Strings - métodos nativos do JS
// Length
console.log("tamanho da string", sentence.length);
// indexOf
// retorna a posição de um caracter ou string
console.log("posição inicial da string 'nome' ", sentence.indexOf('nome'));
// console.log("posição inicial da string 'nome' ",sentence.indexOf('malu')); retorna -1 pq não existe

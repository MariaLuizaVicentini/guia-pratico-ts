"use strict";
// palavra reservada - const
// É usada pra declarar variaveis read-only (somente leitura)
// A variavel não pode ter seu valor alterado, seu estado é imutável
// Fica limitada ao seu escopo (onde foi declarada)
Object.defineProperty(exports, "__esModule", { value: true });
const msg = 'MSG 01';
console.log(msg);
//mensagem = 'MSG 2'; // TypeError: Assignment to constant variable.

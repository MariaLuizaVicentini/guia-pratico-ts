"use strict";
/*
    verifica se o valor da direita é null ou undefined
    utiliza os seguintes operadores: ??
*/
Object.defineProperty(exports, "__esModule", { value: true });
let perfil = "admin";
let profile = null;
console.log(perfil ?? "Usuário comum");
console.log(profile ?? "Usuário comum");

"use strict";
/*
    A instrução if\else trabalha com validação de valores booleanos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let condition = true;
if (condition) {
    console.log("A variavel está com um valor true");
}
else {
    console.log("A variavel está com um valor false");
}
/*
    Caso seja necessário validar mais de uma condição de uma
    determinada variável, nós podemos utilizar o if\elseif\else
*/
let perfil = "admin";
if (perfil == "superadmin") {
    console.log("Super usuário");
}
else if (perfil == "admin") {
    console.log("administrador");
}
else {
    console.log("usuário comum");
}

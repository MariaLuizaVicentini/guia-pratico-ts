"use strict";
/**
 * Desafio 2 - Configuração de Tema
 *
 * - Crie uma variável que represente o tema escolhido pelo usuário.
 * - O tema pode ser "claro", "escuro", null ou undefined.
 * - Caso o tema seja null ou undefined, utilize "claro" como tema padrão.
 * - Exiba o tema que será aplicado à interface.
 * - Utilize o operador de nullish coalescing (??) para definir o tema.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function themeToggle(t) {
    var defaultTheme = t ?? "claro";
    if (defaultTheme == "escuro") {
        console.log("Modo dark");
    }
    else {
        console.log("Modo Claro");
    }
}
themeToggle("escuro");
themeToggle(null);

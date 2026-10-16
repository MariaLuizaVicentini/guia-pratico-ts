"use strict";
/**
 * DESAFIO 3 — Validação de senha
 *
 * Considere a senha correta: 1234.
 *
 * Utilize o do...while para:
 * - Percorrer o array de senhas: [1111, 2222, 1234].
 * - Exibir uma mensagem para cada senha incorreta.
 * - Repetir enquanto a senha for diferente de 1234.
 * - Exibir uma mensagem de sucesso quando a senha correta for encontrada.
 *
 * Utilize um contador para percorrer o array.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var senhaCorreta = 1234;
var arraySenhas = [1111, 2222, 1234];
let i = 0;
do {
    var senha = arraySenhas[i];
    if (senha === senhaCorreta) {
        console.log("Senha correta", senha);
    }
    else {
        console.log("Senha incorreta", senha);
        i = i + 1;
    }
} while (senha !== senhaCorreta);

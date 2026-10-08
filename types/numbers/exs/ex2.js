"use strict";
// leia duas notas de um aluno em uma materia e mostre na tela sua media na disciplina:
Object.defineProperty(exports, "__esModule", { value: true });
function media(n1, n2) {
    const total = n1 + n2;
    return total / 2;
}
function process(materia, aluno, n1, n2) {
    return `A média do aluno ${aluno} na disciplina de ${materia}, é : ${media(n1, n2)}`;
}
const result = process("Eng de software", "Malu", 5, 5);
console.log(result);

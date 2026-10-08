// leia duas notas de um aluno em uma materia e mostre na tela sua media na disciplina:

function media(n1: number, n2: number) {
  const total = n1 + n2;
  return total / 2;
}

function process(materia: string, aluno: string, n1: number, n2: number) {
  return `A média do aluno ${aluno} na disciplina de ${materia}, é : ${media(n1, n2)}`;
}

const result = process("Eng de software", "Malu", 5, 5);
console.log(result);

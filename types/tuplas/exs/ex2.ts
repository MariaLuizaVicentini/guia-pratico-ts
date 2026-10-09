/*
Exercício 2: Criar uma Tupla de Aluno

Enunciado:
- Crie uma tupla chamada aluno que armazene o nome, a idade e a situação de matrícula de um estudante, nessa ordem.
- O nome deve ser do tipo string.
- A idade deve ser do tipo number.
- A situação da matrícula deve ser do tipo boolean.
- Utilize nomes nos parâmetros da tupla para identificar cada informação.
- Atribua valores à tupla.
- Imprima cada informação individualmente no console, acessando os elementos pelos seus índices.

Requisitos:
- Utilize a tipagem explícita.
- Utilize parâmetros nomeados na definição da tupla.
- Utilize console.log() para exibir cada informação.
*/

type Aluno = [name: string, age: number, enrollmentStatus: boolean];

function exibirInfoAluno(aluno: Aluno): void {
  console.log("Nome: ", aluno[0]);
  console.log("Idade: ", aluno[1]);
  console.log("Status da matricula: ", aluno[2]);
};

var result = exibirInfoAluno(["malu", 23, true]);

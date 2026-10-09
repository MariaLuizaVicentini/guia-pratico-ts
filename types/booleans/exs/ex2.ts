/*
Exercício 2: Verificar a Aprovação de um Aluno

Enunciado:
- Crie uma variável chamada grade para armazenar a nota de um aluno.
- Crie uma variável chamada isApproved que verifique se a nota é maior ou igual a 7.
- Imprima o resultado no console.

Requisitos:
- Utilize o tipo number para armazenar a nota.
- Utilize o tipo boolean para armazenar o resultado da comparação.
- A nota mínima para aprovação é 7.
- Utilize console.log() para exibir o resultado.

Desafio extra:
- Teste os valores 7, 6.9 e 10 para observar como o resultado muda.
*/

function process(grade: number): string {
  var isApproved: boolean = grade > 7 ? true : false;

  if (!isApproved) {
    return `O Aluno foi reprovado!`;
  }
  return `O Aluno foi APROVADO!`;
};

const result = process(10);
console.log(result);

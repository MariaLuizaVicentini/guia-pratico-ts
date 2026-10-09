/*
Exercício 1: Classificação de Prioridade

Enunciado:
- Crie um enum chamado Prioridade para representar os níveis de prioridade de uma tarefa.
- O enum deve possuir três valores: Baixa, Media e Alta.
- Defina o valor inicial de Baixa como 1 e deixe os demais valores serem incrementados automaticamente.
- Crie uma variável chamada prioridadeAtual do tipo Prioridade.
- Atribua à variável o valor Prioridade.Alta.

- Imprima o valor armazenado em prioridadeAtual no console.

Desafio extra:
- Utilize o valor armazenado em prioridadeAtual para descobrir e imprimir o nome correspondente à prioridade no console.
*/

enum Prioridade {
  Baixa = 1,
  Media,
  Alta,
}

var prioAtual = Prioridade.Alta;
console.log(`O indice de "Alta" é: ${prioAtual}`);
console.log(
  `Acessando o valor do elemento pelo indice " Prioridade[3] " : ${Prioridade[3]}`,
);

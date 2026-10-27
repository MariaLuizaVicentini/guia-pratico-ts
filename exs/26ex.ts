/*
26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
- Não existe valor maior, os dois são iguais
*/

// assinatura: n2, n2
// n1 > n2
// n2 > n1
// n2 === n1

function comparacao(n1: number, n2: number): void {
  if (n1 === n2) {
    console.log(`O primeiro valor ${n1} é igual ao segundo ${n2}`);
  } else if (n2 > n1) {
    console.log(`O segundo valor ${n1} é maior que o primeiro ${n2}`);
  } else if (n1 > n2) {
    console.log(`O primeiro valor ${n1} é maior que o segundo ${n2}`);
  } else {
    console.log(`Erro! Os valores recebidos não podem ser negativos`);
  }
}

/*
Entrada: 5, 5
Saida: O primeiro valor 5 é igual ao segundo 5
*/
// comparacao(5,5);



/*
Entrada: 3, 7
Saida: O segundo valor 3 é maior que o primeiro 7
*/
// comparacao(3,7);


/*
Entrada: 10, 4
Saida: O primeiro valor 10 é maior que o segundo 4
*/
// comparacao(10,4);

/*
Entrada: NaN, 5
Saida: Erro! Os valores recebidos não podem ser negativos
*/
// comparacao(NaN,4);
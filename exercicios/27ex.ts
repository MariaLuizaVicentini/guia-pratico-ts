/*
27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
mostrando uma mensagem no final, de acordo com a média atingida:
- Média até 4.9: REPROVADO
- Média entre 5.0 e 6.9: RECUPERAÇÃO
- Média 7.0 ou superior: APROVADO
*/

function exibeMedia(n1: number, n2: number): void {
  let media: number = (n1 + n2) / 2;
  if (media <= 4.9) {
    console.log("REPROVADO");
  } else if (media >= 5 && media <= 6.9) {
    console.log("RECUPERAÇÃO");
  } else if (media >= 7) {
    console.log("APROVADO");
  }
}
/*
Entrada: 4, 4
Saida: REPROVADO
*/
// exibeMedia(4, 4);

/*
Entrada: 4.9, 4.9
Saida: REPROVADO
*/
// exibeMedia(4.9, 4.9);

/*
Entrada: 5, 5
Saida: RECUPERAÇÃO
*/
// exibeMedia(5, 5);

/*
Entrada: 6, 6
Saida: RECUPERAÇÃO
*/
//  exibeMedia(6, 6);

/*
Entrada: 6.9, 6.9
Saida: RECUPERAÇÃO
*/
// exibeMedia(6.9, 6.9);

/*
Entrada: 7, 7
Saida: APROVADO
*/
// exibeMedia(7, 7);

/*
Entrada: 9, 9
Saida: APROVADO
*/
exibeMedia(9, 9);

/*
10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

*/

// calculo da area
/*
area = largura  x altura  
*/

// sabendo que 1 litro de tinta pinta 2m quadrados
/*
Quantidade de tinta = area total / 2 = x litro  
*/

function quantidadeTinta(largura: number, altura: number): void {
  let area: number = largura * altura;
  let qntTinta: number = area / 2;
  console.log(`A area tem ${area} metros quadrados`);
  console.log(`A quantidade de tinta necessária é: ${qntTinta} litros`);
}


quantidadeTinta(4, 3);
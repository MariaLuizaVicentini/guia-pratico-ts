/*

24) Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km.

Calcule o preço da passagem, cobrando 
- R$0.50 por Km para viagens até 200Km
- R$0.45 para viagens mais longas.

*/

function calculaDistancia(kmPer: number): void {
  if (kmPer <= 200) {
    let preco: number = kmPer * 0.5;
    console.log(`Resultado: ${preco}`);
  } else {
    let preco: number = kmPer * 0.45;
    console.log(`Resultado: ${preco}`);
  }
}

calculaDistancia(300);
/*
17) Escreva um programa que pergunte a velocidade de um carro. 
    Caso ultrapasse 80Km/h
        - exiba uma mensagem dizendo que o usuário foi multado.
        - Nesse caso, exiba o valor da multa
        - cobrando R$5 por cada Km acima da velocidade permitida.
*/

let velocidade: number = 100;
let limiteKm: number = 80;

if (velocidade > limiteKm) {
  console.log(
    `Você foi multado! A velocidade ${velocidade}km, é maior que o limite de ${limiteKm}km`,
  );
  let kmAserPago = velocidade - limiteKm;
  console.log(`Você estava há ${kmAserPago}km acima da velocidade permitida`);
  console.log(`O valor total a ser pago é: ${kmAserPago * 5}`);
}

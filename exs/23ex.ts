/*
23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. 

Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. 

Sabendo que:
- Homens ganham 5% de desconto
- Mulheres ganham 13% de desconto
*/

interface Client {
  nome: string;
  sexo: "M" | "F";
  valor: number;
}

let mulher: Client = {
  nome: "Malu",
  sexo: "F",
  valor: 100,
};
let homem: Client = {
  nome: "Lucas",
  sexo: "M",
  valor: 100,
};

function promocao(client: Client): void {
  if (client.sexo === "F") {
    console.log(
      `Olá ${client.nome}, sexo informado: ${client.sexo}. Valor atual da compra ${client.valor}`,
    );
    let desconto = client.valor * 0.13;
    console.log(`Desconto a ser aplicado:  ${desconto}`);
    let valorComDesconto = client.valor - desconto;
    console.log(`Valor final: ${valorComDesconto}`);
    console.log("Feliz dia da mulher!");
  } else {
    console.log(
      `Olá ${client.nome}, sexo informado: ${client.sexo}. Valor atual da compra ${client.valor}`,
    );
    let desconto = client.valor * 0.05;
    console.log(`Desconto a ser aplicado:  ${desconto}`);
    let valorComDesconto = client.valor - desconto;
    console.log(`Valor final com 5% de desconto: ${valorComDesconto}`);
  }
}

promocao(homem);

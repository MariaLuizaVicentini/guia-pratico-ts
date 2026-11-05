/*
39) Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...
*/

let inicio: number = 1;
let fim: number = 30;
let listNum: number[] = [];

for (let i = inicio; i <= fim; i++) {
  listNum.push(i);
}

let numsDescre = listNum.sort((a, b) => b - a);

let numFormatados = numsDescre.map((n) => {
  if (n % 4 == 0) {
    return `[${n}]`;
  } else {
    return `${n}`;
  }
});

console.log(numFormatados.join(" "));

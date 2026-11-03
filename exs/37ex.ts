/*
    41) Desenvolva um programa que mostre na tela a seguinte contagem:
    100 95 90 85 80 ... 0 Acabou!
*/

function list(inicio: number, fim: number): Array<number> {
  const result = [];
  for (let i = inicio; i <= fim; i++) {
    result.push(i);
  }
  return result;
}

function process() {
  const arrayCresc = list(0, 100);
  const arrayDecre = arrayCresc.sort((a, b) => b - a);
  const arrayExpect = arrayDecre.filter((num) => num % 5 == 0);
  arrayExpect.forEach((num) => {
    console.log(num);
  });
  console.log("Acabou!");
}

function process2() {
  for (let i: number = 100; i >= 0; i = i - 5) {
    console.log(i);
  }
  console.log("Acabou!");
}

process();
process2();

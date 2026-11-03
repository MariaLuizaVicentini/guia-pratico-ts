/*
    36) Crie um aplicativo que mostre na tela a seguinte contagem:
    0 3 6 9 12 15 18 Acabou!
*/

function list(inicio: number, fim: number): Array<number> {
  const result: Array<number> = [];
  for (let i = inicio; i <= fim; i++) {
    result.push(i);
  }
  return result;
}

function process() {
  const myArray = list(0, 18);
  const newArray = myArray.filter((num) => num % 3 == 0);
  newArray.forEach((num) => {
    console.log(num);
  });
  console.log("Acabou!");
}

process();
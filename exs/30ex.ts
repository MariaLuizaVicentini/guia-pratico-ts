/*
37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um
aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
No final, mostre o seu novo salário, baseado na tabela a seguir:
- Mulheres
- menos de 15 anos de empresa: +5%
- de 15 até 20 anos de empresa: +12%
- mais de 20 anos de empresa: +23%
- Homens
- menos de 20 anos de empresa: +3%
- de 20 até 30 anos de empresa: +13%
- mais de 30 anos de empresa: +25%
*/

interface Func {
  salarioAtual: number;
  genero: "F" | "M";
  tempoCasa: number;
}

function reajusteMulheres(n: number): void {
  if (n < 15) {
    console.log("+5% - resultado: ", (n * 1.05).toFixed(2));
  } else if (n <= 20) {
    console.log("+12% - resultado: ", (n * 1.12).toFixed(2));
  } else {
    console.log("+23% - resultado: ", (n * 1.23).toFixed(2));
  }
}
function reajusteHomens(n: number): void {
  if (n < 20) {
    console.log("+3% - resultado: ", (n * 1.03).toFixed(2));
  } else if (n <= 30) {
    console.log("+13% - resultado: ", (n * 1.13).toFixed(2));
  } else {
    console.log("+25% - resultado: ", (n * 1.25).toFixed(2));
  }
}

function reajuste(func: Func): void {
  if (!func) {
    console.log("tá vazio essa merda");
    return;
  }

  if (func.genero == "F") {
    const result = reajusteMulheres(func.tempoCasa);
    return result;
  } else {
    const result = reajusteHomens(func.tempoCasa);
    return result;
  }
}

reajuste({ genero: "F", salarioAtual: 3000, tempoCasa: 3 });

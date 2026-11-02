/*
35) Faça um algoritmo que mostre na tela a seguinte contagem:
10 9 8 7 6 5 4 3 Acabou!
*/


let nums: Array<number> = [3, 4, 5, 6, 7, 8, 9, 10];
let numsDescre: Array<number> = nums.sort((a, b) => b - a);

numsDescre.forEach((num) => {
  console.log(num);
});

console.log("Acabou! :)");

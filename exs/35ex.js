"use strict";
/*
35) Faça um algoritmo que mostre na tela a seguinte contagem:
10 9 8 7 6 5 4 3 Acabou!
*/
Object.defineProperty(exports, "__esModule", { value: true });
let nums = [3, 4, 5, 6, 7, 8, 9, 10];
let numsDescre = nums.sort((a, b) => b - a);
numsDescre.forEach((num) => {
    console.log(num);
});
console.log("Acabou! :)");

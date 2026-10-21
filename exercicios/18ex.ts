/*
18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.
*/

function podeVotar(anoNasc: number): void {
  var idade: number = 2026 - anoNasc;
  if (idade >= 16) {
    console.log("Sua idade é: ", idade);
    console.log("Pode votar!");
  } else {
    console.log("Ainda não pode votar!");
  }
}

podeVotar(2003);
podeVotar(2023);

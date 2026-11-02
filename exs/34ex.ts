/*

    34) Escreva um programa que moste na tela a seguinte contagem:

    6 7 8 9 10 11 Acabou!
*/

/*
    for ( inicializacao;  condicao;  atualizacao) {
        // código que precisa ser executado
    }

*/

function programa(): void {
  let i: number;

  for (i = 6; i <= 11; i++) {
    console.log(i);
  }

  console.log("Acabou!");
}

programa();

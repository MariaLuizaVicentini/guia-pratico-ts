/*
    33) Escreva um programa pra aprovar ou não o empréstimo bancário pra compra de uma casa. 

    O programa vai perguntar:
        - valor da casa
        - salario do comprador
        - quantos anos vai pagar
    
    Calcule o valor da prestação mensal, sabendo que ela não pode exceder 30% do sálario ou então o empréstimo será negado.

*/

interface Proposta {
  valor_casa: number;
  salario: number;
  anos_a_pagar: number;
}

function calculandoEmprestimo(p: Proposta): void {
  let meses: number = p.anos_a_pagar * 12;
  let prestacao: number = p.valor_casa / meses;
  let limite_emprestimo: number = p.salario * 0.3;
  if (prestacao <= limite_emprestimo) {
    console.log("Empréstimo aprovado");
  } else {
    console.log("Empréstimo negado");
  }
}

calculandoEmprestimo({
  valor_casa: 120000,
  salario: 5000,
  anos_a_pagar: 20,
});

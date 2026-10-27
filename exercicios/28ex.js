"use strict";
/*
28) Desenvolva um programa que leia o nome de um funcionário, seu salário,
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
acordo com a tabela a seguir:
- Até 3 anos de empresa: aumento de 3%
- entre 3 e 10 anos: aumento de 12.5%
- 10 anos ou mais: aumento de 20%

*/
Object.defineProperty(exports, "__esModule", { value: true });
function programa(f) {
    if (f.tempoCasa <= 3) {
        console.log("Até 3 anos de empresa: aumento de 3%");
        const novoSal = f.salario * 1.03;
        console.log(`Novo salario: ${novoSal}`);
        return;
    }
    else if (f.tempoCasa <= 10) {
        console.log("entre 3 e 10 anos: aumento de 12.5%");
        const novoSal = f.salario * 1.125;
        console.log(`Novo salario: ${novoSal}`);
        return;
    }
    else {
        console.log("10 anos ou mais: aumento de 20%");
        const novoSal = f.salario * 1.2;
        console.log(`Novo salario: ${novoSal}`);
        return;
    }
}
programa({ nome: "leo", salario: 1621, tempoCasa: 3 });
programa({ nome: "ana", salario: 3000, tempoCasa: 7 });
programa({ nome: "carlos", salario: 5000, tempoCasa: 12 });

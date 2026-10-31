"use strict";
/*
31) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços.

O aluguel de um carro custa R$90 por dia para carro popular
R$150 por dia para carro de luxo

Além disso, o cliente paga por Km percorrido.
Faça um programa que leia:
- o tipo de carro alugado (popular ou luxo)
- quantos dias de aluguel e quantos Km foram percorridos.

No final mostre o preço a ser pago de acordo com a tabela a seguir:
- Carros populares (aluguel de R$90 por dia)
- Até 100Km percorridos: R$0,20 por Km
- Acima de 100Km percorridos: R$0,10 por Km


- Carros de luxo (aluguel de R$150 por dia)
- Até 200Km percorridos: R$0,30 por Km
- Acima de 200Km percorridos: R$0,25 por Km

*/
Object.defineProperty(exports, "__esModule", { value: true });
function popularCar(kms) {
    if (kms <= 100) {
        console.log("R$0,20 por Km");
        return kms * 0.2;
    }
    else {
        console.log("R$0,10 por Km");
        return kms * 0.1;
    }
}
function luxoCar(kms) {
    if (kms <= 200) {
        console.log("R$0,30 por Km");
        return kms * 0.3;
    }
    else {
        console.log("R$0,25 por Km");
        return kms * 0.25;
    }
}
function main(car) {
    console.log("Modelo recebido: ", car.modelo);
    console.log("Dias recebidos: ", car.dias);
    console.log("KMs recebido: ", car.kms);
    if (car.modelo == "popular") {
        const resultKm = popularCar(car.kms);
        const resultDias = car.dias * 90;
        console.log(`Valor a ser pago: R$${(resultKm + resultDias).toFixed(2)}`);
        return;
    }
    else {
        const resultKm = luxoCar(car.kms);
        const resultDias = car.dias * 150;
        console.log(`Valor a ser pago: R$${(resultKm + resultDias).toFixed(2)}`);
        return;
    }
}
// main({ modelo: "popular", dias: 1, kms: 100 });
main({ modelo: "luxo", dias: 2, kms: 250 });

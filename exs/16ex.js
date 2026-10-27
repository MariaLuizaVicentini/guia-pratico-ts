"use strict";
/*
    16) Escreva um programa pra calcular a redução do tempo de vida de um fumante.
        Pergunte:
            - quantidade de cigarros fumados por dia
            - quantos anos fuma

        A cada CIGARRO
            - menos 10 minutos de vida

        Quantos dias de vida um fumante perdera?
             - exiba o total em dias
*/
Object.defineProperty(exports, "__esModule", { value: true });
const DIAS_POR_ANO = 365;
const MINUTOS_POR_CIGARRO = 10;
const MINUTOS_EM_UM_DIA = 24 * 60;
function tempoVida(cigarros, anos) {
    console.log(`Por dia eu fumo: ${cigarros} cigarros`);
    console.log(`Sou fumante há: ${anos} anos`);
    // total de cigarros fumados na vida
    let totalCigarros = cigarros * (anos * DIAS_POR_ANO);
    // total de minutos perdidos
    let totalMinPerdidos = totalCigarros * MINUTOS_POR_CIGARRO;
    // conversa de minutos pra dias
    let diasPerdidos = totalMinPerdidos / MINUTOS_EM_UM_DIA;
    console.log(`Dias perdidos: ${diasPerdidos}`);
}
tempoVida(4, 9);

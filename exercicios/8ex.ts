/*
8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1857.2dm
1.8572Hm
18572.0cm
18.572Dam
185720.0mm

*/

function processaUnidadeMedida(metros: number): void {
  console.log(`A distância de ${metros} corresponde a:`);
  console.log(`${metros / 1000} Km`);
  console.log(`${metros * 10} dm`);
  console.log(`${metros / 100} Hm`);
  console.log(`${metros * 100} cm`);
  console.log(`${metros / 10} Dam`);
  console.log(`${metros * 1000} mm`);
}

processaUnidadeMedida(185.72);

/*
    A lógica das unidades de medida:
- pense nas unidades de medida como degraus de uma escada
- o metro é o degrau principal (ponto de partida)

    km -> hm -> dam -> [ METRO ] -> dm -> cm -> mm

    - Subindo a escada para a ESQUERDA (unidades maiores): DIVIDE por 10 a cada degrau.
      - 1 degrau à esquerda  (Dam) = metro / 10
      - 2 degraus à esquerda  (Hm)  = metro / 100
      - 3 degraus à esquerda  (Km)  = metro / 1000

    - Descendo a escada para a DIREITA (unidades menores): MULTIPLICA por 10 a cada degrau.
      - 1 degrau à direita (dm) = metro * 10
      - 2 degraus à direita (cm) = metro * 100
      - 3 degraus à direita (mm) = metro * 1000
*/

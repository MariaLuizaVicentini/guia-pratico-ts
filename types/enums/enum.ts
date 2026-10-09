/*
    "enum" nos permite declarar um conjunto de valores/constantes predefinidos
    
    Existem três formas de se trabalhar com ele no TS:
- Numeric (Numérico)
- String (Texto)
- Heterogeneous (Heterogêneo)
*/

// 1. Numéricos - (Mapeiam nomes para números)
enum DiaDaSemana {
  Segunda = 1,
  Terca = 2,
  Quarta = 3,
  Quinta = 4,
  Sexta = 5,
  Sabado = 6,
  Domingo = 7,
}

// 1. Numérios -  Caso o valor inicial não sejapassado na declaração, o tsc fará um autoincremento de +1 iniciando em 0 até o último elemento do enum
enum DiaDaSemanaSemValorInicial {
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo,
}
console.log( `Hoje é: ${DiaDaSemanaSemValorInicial[4]}-feira`);

enum DiaDaSemanaComValorInicial {
    Segunda = 1,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo,
}
console.log( `Hoje é: ${DiaDaSemanaComValorInicial[4]}-feira`);




// 2. String (Cada chave é mapeada explicitamente para uma string)
enum Direcao {
  Cima = "CIMA",
  Baixo = "BAIXO",
  Esquerda = "ESQUERDA",
  Direita = "DIREITA",
}

// 3. Heterogêneo (Mistura números e strings - pouco recomendado na prática, mas existe)
enum RespostaBooleana {
  Sim = 1,
  Nao = "NAO",
}

// Testando o uso prático:
const hoje: DiaDaSemana = DiaDaSemana.Segunda;
console.log(hoje); // Imprime: 1

const direcaoAtual: Direcao = Direcao.Cima;
console.log(direcaoAtual); // Imprime: "CIMA"

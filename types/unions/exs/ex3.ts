
/*
Exercício 3: Identificar o Tipo de Veículo

Objetivo: Praticar Union Types com classes e o operador instanceof.

Enunciado:
- Crie uma classe chamada Carro com um método chamado ligar(), que imprima "Carro ligado!" no console.
- Crie uma classe chamada Moto com um método chamado empinar(), que imprima "Moto empinando!" no console.
- Crie uma função chamada testarVeiculo que receba um parâmetro chamado veiculo.
- O parâmetro deve aceitar objetos das classes Carro ou Moto.
- Dentro da função, utilize instanceof para verificar se o veículo pertence à classe Carro ou à classe Moto.
- Se for um Carro, chame o método ligar().
- Se for uma Moto, chame o método empinar().
- Crie uma instância de cada classe e passe cada uma delas para a função testarVeiculo.

Requisitos:
- Utilize Union Type para permitir os dois tipos de veículos.
- Utilize instanceof para identificar a classe do objeto.
- Utilize console.log() nos métodos para exibir as mensagens.

Desafio extra:
- Explique por que o TypeScript permite chamar ligar() quando o objeto é um Carro
  e empinar() quando o objeto é uma Moto, mesmo que o parâmetro aceite os dois tipos.
*/
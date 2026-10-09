"use strict";
/*
Exercício 3: Criar uma Tupla de Usuário

Enunciado:
- Crie uma tupla chamada usuario que armazene o nome de usuário e a idade, nessa ordem.
- O nome de usuário deve ser do tipo string.
- A idade deve ser do tipo number.
- Atribua valores à tupla.
- Imprima o nome de usuário e a idade individualmente no console.
- Em seguida, tente adicionar um novo nome e uma nova idade à tupla utilizando o método push().
- Imprima a tupla novamente para observar o resultado.

Requisitos:
- Utilize a tipagem explícita para definir os tipos da tupla.
- Utilize os índices para acessar os elementos.
- Utilize console.log() para exibir os resultados.

Desafio extra:
- Observe o que acontece ao utilizar push() para adicionar novos elementos.
- Reflita sobre a diferença entre a quantidade de elementos definida na tupla
  e a quantidade de elementos que ela pode apresentar após essa operação.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const usuario = ["Malu", 23];
console.log("Nome inicial:", usuario[0]);
console.log("Idade inicial:", usuario[1]);
usuario.push("Leo");
usuario.push(28);
console.log("Tupla após o push:", usuario);

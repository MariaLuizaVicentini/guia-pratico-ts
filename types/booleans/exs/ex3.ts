/*
Exercício 3: Verificar o Acesso ao Sistema

Enunciado:
- Crie uma variável chamada isAuthenticated para indicar se o usuário está autenticado.
- Crie uma variável chamada isAccountActive para indicar se a conta está ativa.
- Crie uma variável chamada canAccess que verifique se o usuário está autenticado E se a conta está ativa.
- Imprima o resultado no console.

Requisitos:
- Utilize o tipo boolean para as três variáveis.
- Utilize o operador lógico && para verificar as duas condições.
- Utilize console.log() para exibir o resultado.

Regra de acesso:
- O acesso só será permitido se o usuário estiver autenticado e a conta estiver ativa.

Desafio extra:
- Teste todas as combinações possíveis de true e false para as variáveis
  isAuthenticated e isAccountActive.
*/

function process(isAccountActive: boolean, isAuthenticated: boolean): string {
  var canAccess = isAuthenticated && isAccountActive ? true : false;
  if (!canAccess) {
    return `Seu usuário não tem permissão de acesso!`;
  }
  return `Acesso permitido.`;
}

const result = process(true, true);
console.log(result);
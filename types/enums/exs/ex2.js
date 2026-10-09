"use strict";
/*
Exercício 2: Status de um Pedido

Enunciado:
- Crie um enum chamado StatusPedido para representar as etapas de um pedido.
- O enum deve possuir os seguintes valores:
  Pendente = "PENDENTE"
  Processando = "PROCESSANDO"
  Enviado = "ENVIADO"
  Entregue = "ENTREGUE"
- Crie uma variável chamada statusAtual do tipo StatusPedido.
- Atribua à variável o valor StatusPedido.Processando.
- Imprima o valor armazenado em statusAtual no console.

Desafio extra:
- Altere o statusAtual para StatusPedido.Entregue.
- Imprima novamente o resultado e observe a diferença.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Pendente"] = "PENDENTE";
    StatusPedido["Processando"] = "PROCESSANDO";
    StatusPedido["Enviado"] = "ENVIADO";
    StatusPedido["Entregue"] = "ENTREGUE";
})(StatusPedido || (StatusPedido = {}));
// var statusAtual: StatusPedido = StatusPedido.Processando;
var statusAtual = StatusPedido.Entregue;
console.log(statusAtual);

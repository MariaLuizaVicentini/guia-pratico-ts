// palavra reservada - var
// pode ser acessada de qualquer parte do code
// não fica limitada ao escopo em que foi declarada

var msgForaDoIf = "mensagem fora do if";
if (true) {
  var msgDentroDoIf = "mensagem dentro do if";
  console.log(msgDentroDoIf);
}
console.log(msgForaDoIf);
console.log(msgDentroDoIf);


// sofre hoisting (içamento): a declaração é movida para o topo do escopo
// permite atribuir valor e usar a variável antes da sua linha de declaração
mensagem = "MSG";
console.log(mensagem);
var mensagem;
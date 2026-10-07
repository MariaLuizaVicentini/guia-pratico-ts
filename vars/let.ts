// palavra reservada - let
// só pode ser acessada dentro do escopo onde foi declarada
// se tentarmos chamar ela fora do escopo ocorre um erro

let msgFora = "mensagem fora do if"
if (true) {
    let msgDentro = "mensagem dentro do if";
    console.log(msgDentro);
}
console.log(msgFora);
// console.log(msgDentro); ocorre um erro pq a variavel ficou limitada ao escopo do if
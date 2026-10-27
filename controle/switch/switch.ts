/*
    switch - estrutura de controle
- passamos o valor a ser validado no parametro do switch(parm)
- em cada case passamos o valor correspondente que será comparado
- utilizamos o break para interromper a execução após encontrar o caso correspondente
- utilizamos o default como caso padrão caso nenhuma das opções anteriores (case) seja atendida
*/

let perfil = "admin";

switch (perfil) {
  case "superuser":
    console.log("Super usuário");
    break;
  case "manager":
    console.log("Gerente");
    break;
  case "admin":
    console.log("Adminitrador");
    break;
  case "user":
    console.log("Usuário comum");
    break;
  default:
    console.log("sem perfil");
    break;
}

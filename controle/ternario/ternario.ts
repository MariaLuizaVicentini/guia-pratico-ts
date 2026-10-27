/*
    O operador ternario:
        avalia uma expressão booleana e retorna o resultado de uma das duas expressões
*/

let perfil = "admin";
console.log(
  perfil == "superadmin" ? "Então é um super usuário" : "administrador",
);
console.log(
  perfil == "superadmin"
    ? "Então é um super usuário"
    : perfil == "admin"
      ? "administrador"
      : "usuario comum",
);

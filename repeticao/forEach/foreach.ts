/*
    ForEach - Estrutura de repetição
        - É uma simplificação do ' for '
        - Também trabalha com coleções de dados ( listas, tuplas)
        - Permite acessar cada elemento individualmente iterando sobre toda a coleção
*/

var languages: Array<string> = ["Python", "JS", "TS", "Php"];

languages.forEach((l) => {
  console.log(l);
});



// Sintaxe - ForEach (para cada):
/*
        colecao.forEach(
            (elemento) => {// codigo a ser executado para cada elemento}
        );
*/ 

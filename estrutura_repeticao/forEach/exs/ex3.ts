/*
Desafio 3 — Listar produtos
Crie um array de objetos contendo o nome e o preço de 4 produtos. Utilize forEach para percorrer o array e exibir o nome e o preço de cada produto no console.
*/

let arrayProdutos = [
  { nome: "parafuso", preco: "1,00" },
  { nome: "furadeira", preco: "331,00" },
  { nome: "martelo", preco: "20,00" },
  { nome: "pá de ferro", preco: "55,00" },
  { nome: "lixadeira", preco: "55,00" },
];

/*
    Arrays - No JavaScript

        - Sempre serão um tipo de objeto especial
        - se usarmos typeof o js retorna <object>
    
    para verificarmos se é uma lista de verdade:
        - usamos o método 'isArray( )' da classe Array
        - esse método retorna true ou false
    

*/
console.log(typeof arrayProdutos);
console.log(Array.isArray(arrayProdutos));

arrayProdutos.forEach((p) => {
  let nome = p.nome;
  let preco = p.preco;
  console.log(nome, preco);
});

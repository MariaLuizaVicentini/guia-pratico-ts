/**
 * Desafio 3 - Sistema de Categorias de Produtos
 *
 * - Crie uma função que receba uma categoria de produto representada por uma string.
 * - As categorias disponíveis são: "eletrônicos", "vestuário", "alimentos" e "livros".
 * - Utilize switch para identificar a categoria recebida.
 * - Para cada categoria, exiba uma mensagem informando o tipo de produto.
 * - Para "eletrônicos", exiba "Produtos tecnológicos".
 * - Para "vestuário", exiba "Roupas e acessórios".
 * - Para "alimentos", exiba "Produtos para consumo".
 * - Para "livros", exiba "Materiais de leitura".
 * - Caso a categoria não exista, exiba uma mensagem informando que ela é inválida.
 */

type Categorias = "eletrônicos" | "vestuário" | "alimentos" | "livros";

function exibeCatalago(categoria: Categorias) {
  switch (categoria) {
    case "eletrônicos":
      console.log("Produtos tecnológicos");
      break;
    case "alimentos":
      console.log("Produtos para consumo");
      break;
    case "livros":
      console.log("Materiais de leitura");
      break;
    case "vestuário":
      console.log("Roupas e acessórios");
      break;
    default:
      console.log("Categoria inválida!");
      break;
  }
}


exibeCatalago("eletrônicos");
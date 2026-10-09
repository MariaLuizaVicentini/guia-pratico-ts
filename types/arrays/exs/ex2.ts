/*
Exercício 2: Localizar Elemento e Verificar Existência
Dado o array de frutas ["maçã", "banana", "laranja", "uva"]:
- Verifique se a fruta "banana" está presente na lista usando .includes().
- Encontre a posição (índice) da fruta "laranja" usando .indexOf().
- Imprima a mensagem "Encontrado na posição X" no console
*/

var listFruits: Array<string> = ["maçã", "banana", "laranja", "uva"];

function hasFruit(f: string) {
  var verifies = listFruits.includes(f);
  if (!verifies) {
    return `${f} não existe na lista de frutas atual`;
  }
  return `${f} está presente na lista`;
}

const result = hasFruit("banana");
console.log(result);

function getFruit(f: string) {
  var index = listFruits.indexOf(f);
  return `A fruta ${f} mencionada foi encontrada na posição ${index}`;
}

const result2 = getFruit("laranja");
console.log(result2);

let cor: string = "verde";
// console.log("cor verde: ", cor)
cor = 'azul';
// console.log("cor azul: ", cor)


let nome: string = "Maria Luiza";
let idade: number = 23;
// template string
let sentence: string = `Olá Mundo, meu nome é ${nome}, tenho ${idade} anos de idade`;
console.log(sentence);


// Trabalhando com Strings - métodos nativos do JS

// Length
console.log("tamanho da string",sentence.length);

// indexOf
    // retorna a posição de um caracter ou string
console.log("posição inicial da string 'nome' ",sentence.indexOf('nome'));
// console.log("posição inicial da string 'nome' ",sentence.indexOf('malu')); retorna -1 pq não existe

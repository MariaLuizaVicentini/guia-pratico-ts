// Diferente dos arrays, que trabalham com um tipo de dado somente
// As tuplas podem trabalhar com diferentes tipos


let list: [string, number, string] = ["malu", 1, "vicentini"];

// podemos incluir tbm, nome nos params
let aluno: [nome: string, idade: number, email: string] = ["malu", 23, "vicentinimalu1@gmail.com"];

let list2: [string, number] = ["maluzeira", 23];
// list2.push("gabriel", 22);
console.log(list2[0]);
console.log(list2[1]);
// console.log("com o grabriel adicionado: ", list2);
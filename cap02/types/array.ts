
// sem palavras reservadas
let numeros: number[] = [1, 2, 3];
let textos: string[] = ["ex 1", "ex 2", "ex 3"];

// com palavra reservada 'Array<>'
let numerosArray: Array<number> = [1, 2, 3];
let textosArray: Array<string> = ["ex 1", "ex 2", "ex 3"];

// add um novo item ao array
numeros.push(4);
textos.push("ex 4");

console.log("add numero a lista: ", numeros)
console.log("add string a lista: ", textos)



// ReadonlyArray
    // é um array somente de leitura
    // nenhum método de alteração funciona nele


let numerosDaMega: ReadonlyArray<number> = [8, 5, 5, 11, 4, 28];
//numerosDaMega[0] = 12; // error!
// numerosDaMega.push(23); // error!
//numerosDaMega.pop(); // error!
//numerosDaMega.length = 100; // error!

// sintaxe usada na versão mais recente
let numerosDaMega2: Readonly<number[]> = [8, 5, 5, 11, 4, 28];
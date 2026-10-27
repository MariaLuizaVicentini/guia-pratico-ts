/*
    Sort( )

    Recebe um array de strings, ordena a lista original em ordem alfabetica e retorna ela modificada

    Serve para ordenar números, mas com uma sintaxe especial

*/ 



// ordenando strings - crescente
const frutas: Array<string> = ["MARACUJA", "BANANA", "AMORA"];
console.log("ANTES", frutas);

frutas.sort();
console.log("DEPOIS", frutas);


// ordenando numeros - crescente
const numeros: Array<number> = [1,9,3];
console.log("ANTES", numeros);
numeros.sort((a, b) => a - b);
console.log("DEPOIS", numeros);



// ordenando numeros - descrecente
const numsDecre: Array<number> = [1,2,3];
console.log("ANTES", numsDecre);
numsDecre.sort((a, b) => b -a);
console.log("DEPOIS", numsDecre);
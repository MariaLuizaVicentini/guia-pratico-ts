/*
    Filter 
        - percorre um array e cria um novo array contendo apenas os elementos
        que retornam ' true ' pra condição (callback) fornecida
*/ 

// const sintaxe = list.filter(() => condicoes);


const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((num) => num % 2 === 0);


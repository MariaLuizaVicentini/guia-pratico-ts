/*
    types assertions
        - representado por <>
        - passamos o tipo que o valor deve receber entre as chaves
        - ele altera o tipo de uma variavel, sem que o compilador envie uma exception
*/ 



function typeAssertions(codAny: any) {
  let codNumber: number = <number>codAny;
  return codNumber * 10;
}

var result = typeAssertions(10);
console.log(result);
console.log(typeof result);

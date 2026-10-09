/*
    O union nos permite combinar um ou mais tipos. Sua sintaxe é um
    pouco diferente dos outros types, ele utiliza uma barra vertical para 
    passar os tipos que ele deve aceitar.
*/

let exeVar: string | number | boolean;
exeVar = 123;
console.log(exeVar);
exeVar = "ABC";
console.log(exeVar);
exeVar = false;
console.log(exeVar);

/*
    Mas o union não fica limitado à utilização de strings, números e
    booleans. Nós também podemos passar um array para ele  
*/

var myArray: number[] | string[];
var i: number;
myArray = [1, 2, 3];

for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

myArray = ["A", "B", "C"];
for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

/**
 * typeof
 * - Verifica o tipo de um valor, como string, number, boolean e undefined.
 * - Retorna uma string com o tipo do dado.
 * - Usado para verificar o tipo de variáveis ou expressões.
 */

let x: string | number | boolean = 13;
console.log(typeof x); //number

/**
 * instanceof
 * - Verifica se um objeto pertence a uma determinada classe ou se foi criado
 *   a partir de uma função construtora.
 * - Retorna true ou false.
 * - Usado para verificar se um objeto é uma instância de uma classe ou
 *   função construtora específica.
 */

interface Z {
  x(): string;
}

class A implements Z {
  x(): string {
    throw new Error("Método não implementado");
  }
}

class B implements Z {
  x(): string {
    throw new Error("Método não implementado");
  }
}

function exemploComInstanceof(parametro: Z) {
  if (parametro instanceof A) {
    console.log("Sou a classe A");
  }
  if (parametro instanceof B) {
    console.log("Sou a classe B");
  }
}

const result = exemploComInstanceof(new A());


class Carro {
    ligar() { console.log("Vrum!"); }
}

class Moto {
    empinar() { console.log("Grau!"); }
}

function testarVeiculo(veiculo: Carro | Moto) {
    // O TypeScript usa o instanceof para saber exatamente qual método chamar
    if (veiculo instanceof Carro) {
        veiculo.ligar(); // Aqui o TS sabe que 'veiculo' é do tipo Carro
    } else {
        veiculo.empinar(); // Aqui o TS sabe que 'veiculo' é do tipo Moto
    }
}

const meuCarro = new Carro();
console.log(meuCarro instanceof Carro); // true
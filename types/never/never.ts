/*
    Type - Never
      - Esse type indica que algo nunca deve ocorrer
      - que indica que uma função nunca deve retornar algo 
        
    
    Na pratica:
      - Quando uma função nunca termina sua execução normalmente
      - Quando o TypeScript identifica que uma situação não deveria ser possível


    void X undefined:
      - void pode receber o valor null , que indica ausência de um
        objeto, ou undefined , que indica a ausência de qualquer valor
      - never não pode receber valor
*/

function verificandoTipo(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }

  return fail("Esse metodo não aceita esse tipo de Type!");
}

function fail(msg: string): never {
  throw new Error(msg);
}

verificandoTipo("string");
verificandoTipo(10);
let ativo = true;
// verificandoTipo(ativo); // erro

function infiniteLoop(): never {
  while (true) {
    console.log("Carregando processos!");
  }
}

// infiniteLoop();


// let neverNaoRecebeValor: never = null;
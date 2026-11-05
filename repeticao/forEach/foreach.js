"use strict";
/**
 * ForEach - Iteração de elementos
    • O que faz:
        Apenas executa uma ação para cada item. É como um loop for tradicional.
    
    • Retorno:
        Sempre undefined.
    
    • Quando usar:
        Quando você quer apenas gerar um "efeito colateral" (side-effect), como salvar dados no banco, exibir mensagens na tela ou salvar logs.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var languages = ["Python", "JS", "TS", "Php"];
languages.forEach((l) => {
    console.log(l);
});
/**
 * Sintaxe - ForEach (para cada):
 *
 * coleção.forEach(
 *   (elemento, indice, arrayOriginal) => {
 *     // código executado para cada elemento
 *   }
 * );
 */ 

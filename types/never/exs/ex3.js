"use strict";
/**
 * Extract Sintaxe
    * Extract<TipoOriginal, TipoParaSelecionar>
 *
    * TipoOriginal: o tipo do qual você quer selecionar valores.
    * TipoParaSelecionar: o tipo que será utilizado como critério de seleção.
 *
    * - O Extract seleciona os membros do tipo original que são
    *   compatíveis com o tipo informado como critério.
 *
 *  - Se nenhum membro for compatível, o resultado será never.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// O resultado de YellowColor é never.
// Isso acontece porque "yellow" não pertence ao tipo AvailableColor.
// Nenhum dos valores disponíveis ("red", "blue" ou "green")
// é compatível com "yellow".

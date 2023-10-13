import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        // ReadOnlyArray -> Retorna uma lista somente leitura (Recurso TypeScript)
        // redonly Negociacao[] -> funciona da mesma forma anterior
        // Não devemos retornar a lista private para evitar alterações indevidas
        // Outra forma seria retornar cada item da lista de negociacoes em uma nova lista
        // Com isto impedimos que nossa lista de negociacoes seja alterada
        // return [...this.negociacoes];
        return this.negociacoes;
    }
}
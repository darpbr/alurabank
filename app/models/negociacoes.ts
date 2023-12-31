import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        // ReadOnlyArray -> Retorna uma lista somente leitura (Recurso TypeScript)
        // redonly Negociacao[] -> funciona da mesma forma anterior
        // Não devemos retornar a lista private para evitar alterações indevidas
        // Outra forma seria retornar cada item da lista de negociacoes em uma nova lista
        // Com isto impedimos que nossa lista de negociacoes seja alterada
        // return [...this.negociacoes];
        return this.negociacoes;
    }

    public toString(): string {
        return JSON.stringify(this.negociacoes, null, 2);
      }

      ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
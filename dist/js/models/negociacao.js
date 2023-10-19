export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    get data() {
        const dataRetorno = new Date(this._data.getTime());
        return dataRetorno;
    }
    toString() {
        return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
  `;
    }
}

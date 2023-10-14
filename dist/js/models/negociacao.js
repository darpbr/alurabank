export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const dataRetorno = new Date(this._data.getTime());
        return dataRetorno;
    }
    criaDe(dataString, quantidadeString, valorString) {
        // Expressão regular que vai encontrar todas ocorrências de -
        const exp = /-/g;
        // Toda data recebida do formulário html está no formato: yyy-mm-dd e para criar uma constante do tipo Date() o formato exigido
        // é yyyy,mm,dd (por isto precisamos substituir as ocorrências de - por ,)
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}

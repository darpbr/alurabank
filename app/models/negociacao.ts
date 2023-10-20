import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao>{
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {
  }

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    // Expressão regular que vai encontrar todas ocorrências de -
    const exp = /-/g;
    // Toda data recebida do formulário html está no formato: yyy-mm-dd e para criar uma constante do tipo Date() o formato exigido
    // é yyyy,mm,dd (por isto precisamos substituir as ocorrências de - por ,)
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  get data(): Date {
    const dataRetorno = new Date(this._data.getTime());
    return dataRetorno;
  }

  public toString(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
  `;
  }

  public ehIgual(negociacao: Negociacao): boolean{
    return this.data.getDate() === negociacao.data.getDate()
        && this.data.getMonth() === negociacao.data.getMonth()
        && this.data.getFullYear() === negociacao.data.getFullYear();
  }
}

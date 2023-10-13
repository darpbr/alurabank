export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ){}

    get data(): Date {
        const dataRetorno = new Date(this._data.getTime());
        return dataRetorno;
    }
}
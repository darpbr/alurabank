import { Imprimivel } from "../interfaces/imprimivel.js";

export function imprimir(...args: Array<Imprimivel>) {
    for(let objeto of args){
        console.log(objeto.toString());
    }
}
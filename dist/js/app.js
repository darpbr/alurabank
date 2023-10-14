import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.acidiona();
    });
}
else {
    throw Error("Não foi possivel iniciar a aplicação. Verifique se o form existe!");
}

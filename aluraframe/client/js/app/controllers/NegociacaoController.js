class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //bind é usado para que o $ mantenha a associação com o document
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor");
    }

    adiciona(event) {
        event.preventDefault();

        console.log(this.inputData);
        console.log(this.inputQuantidade);
        console.log(this.inputValor);
    }
}
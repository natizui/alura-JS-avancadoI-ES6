class NegociacaoController {

    adiciona(event) {
        event.preventDefault();

        // let inputData = document.querySelector("#data");
        // let inputQuantidade = document.querySelector("#quantidade");
        // let inputValor = document.querySelector("#valor");
        //para escrever menos:
        let $ = document.querySelector.bind(document); //bind é usado para que o $ mantenha a associação com o document
        let inputData = $("#data");
        let inputQuantidade = $("#quantidade");
        let inputValor = $("#valor");

        console.log(inputData);
        console.log(inputQuantidade);
        console.log(inputValor);
    }
}
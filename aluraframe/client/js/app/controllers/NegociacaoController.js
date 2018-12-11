class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //bind é usado para que o $ mantenha a associação com o document
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(...  //... é um spread operator, indica que o array será desmembrado - e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor.
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        ); 

        console.log(data);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }

    
}
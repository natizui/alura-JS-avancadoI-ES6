class ContaController {
    constructor() {
        this.conta1 = new ContaCorrente(200); 
        this.conta2 = new ContaPoupanca(300); 

    }

    testa(event){
        event.preventDefault();
        this.conta1.atualiza(2);
        this.conta2.atualiza(3);
        console.log(this.conta1.saldo); //202
        console.log(this.conta2.saldo); //306
    }

}

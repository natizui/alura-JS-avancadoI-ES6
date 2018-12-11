class Negociacao {


    //antes da Au02Ativ02 só tem isso:
    // constructor() {

    //     this._data = new Date();
    //     this._quantidade = 1;
    //     this._valor = 0.0;
    // } 


    //Au02Ativ03 (depois da Au02Ativ02 tudo a partir daqui): 
    constructor(data, quantidade, valor) {

        // this._data = data; //antes da Au02Ativ08
        this._data = new Date(data.getTime()); //Au02Ativ08, parte2
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //só a partir da Au02Ativ06, parte3
    }
    //Au02Ativ03 parte2 vai até aqui
    


    //na Au02Ativ03 parte2:
    // obtemVolume() {
    //     return this.quantidade * this.valor;
    // }
    


    //na Au02Ativ04:
    // getVolume() {
    //     return this._quantidade * this._valor;
    // }
    // getData() {
    //     return this._data;
    // }
    // getQuantidade() {
    //     return this._quantidade;
    // }
    // getValor() {
    //     return this._valor;
    // }
    //Au02Ativ04 vai até aqui
    
    
    
    //Au02Ativ05 em diante:
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        // return this.data; //antes da Au02Ativ07
        return new Date(this._data); //na Au02Ativ07, parte1
    }

    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}
class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(modelo) {
        throw new Error ('Você deve sobrescrever este método em seu template');
    }

    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }

}

//OBSERVAÇÃO
//No JavaScript ( ECMAScript) não há uma forma de evitar alguém dar new na classe View, no entanto isso existe no TypeScript. A linguagem TypeScript que se baseia no JavaScript, já possui vários recursos que ainda não existem no JavaScript, incluindo classes abstratas.
//Resumindo, com TypeScript poderíamos usar a palavra chave abstract que proíbe instanciar objetos dessa classe, por exemplo:
// abstract class View {
//      ...
// }
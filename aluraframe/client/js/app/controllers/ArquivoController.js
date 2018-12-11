class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        
        let arquivo = ArquivoHelper.cria(this._inputDados.value);
        console.log(`Os dados do arquivo são: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`)
        this._limpaFormulario();
        
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}
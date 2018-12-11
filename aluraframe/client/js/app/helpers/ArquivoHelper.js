class ArquivoHelper {
    static cria(dados) {
        return new Arquivo(...dados.toUpperCase().split('/'))
    }
}
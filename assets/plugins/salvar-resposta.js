class SalvarRespostaPlugin extends RenJS.Plugin {

    onCall(params) {
        // recupera info do usuário recebida na inicialização
        const usuario = sessionStorage.getItem('usuario-ead');

        // chama a api para salvar a resposta do usuário
        console.log(`${usuario} respondeu ${params.resposta}`);

        // libera o resto da execução
        this.game.resolveAction();
    }
}

RenJSGame.addPlugin('SalvarRespostaPlugin', SalvarRespostaPlugin)


class IniciarContagemTempoResposta extends RenJS.Plugin {

    onCall(params) {
        // recupera info do usuário recebida na inicialização
        sessionStorage.setItem('comecou-responder', new Date());


        // libera o resto da execução
        this.game.resolveAction();
    }
}

RenJSGame.addPlugin('IniciarContagemTempoResposta', IniciarContagemTempoResposta)
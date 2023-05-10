import Button from "./button.js"

class CaixaMensagem {
    constructor(){
        this.local = document.body
        this.janelaMensagem = document.createElement('div')

        this.boxJanelaMensagem = document.createElement('div')
        this.boxTitulo = document.createElement('div')
        this.boxMensagem = document.createElement('div')
        this.boxRodape = document.createElement('div')

        this.classes = ['mensagemAlerta', 'mensagemSucesso', 'mensagemExcluir' , 'mensagemInfo', 'mensagemEnviar', 'mensagemPesquisar', 'mensagemConfig']
    }

    mostar=(tipo, titulo, mensagem)=> {
        let btn = new Button

        this.janelaMensagem.setAttribute('id', 'janelaMensagem')
        this.janelaMensagem.classList.add('janelaMensagem')
        this.local.prepend(this.janelaMensagem)

        this.boxJanelaMensagem.classList.add('boxJanelaMensagem')
        this.janelaMensagem.appendChild(this.boxJanelaMensagem)

        this.boxJanelaMensagem.appendChild(this.boxTitulo)
        
        this.boxMensagem.classList.add('boxMensagem')
        this.boxJanelaMensagem.appendChild(this.boxMensagem)
        this.boxMensagem.innerHTML = mensagem

        this.boxRodape.classList.add('boxRodape')
        this.boxRodape.setAttribute('id','boxRodape')
        this.boxJanelaMensagem.appendChild(this.boxRodape)

    
        this.classes.forEach(item => {
            this.boxTitulo.classList.remove(item)
        });
   
        if(tipo == 'alerta') {
            this.boxTitulo.classList.add('mensagemAlerta')
            this.boxTitulo.innerHTML = titulo
            btn.criar('boxRodape', 'alerta', 'Fechar')

            const fechar = document.getElementById('btnsair');
            fechar.addEventListener('click',  () => {
                this.esconder()
                btn.esconder()
            })

        } else if (tipo == 'sucesso') {
            this.boxTitulo.classList.add('mensagemSucesso')
            this.boxTitulo.innerHTML = titulo
            btn.criar('boxRodape', 'sucesso', 'Fechar')

            const fechar = document.getElementById('btnsair');
            fechar.addEventListener('click',  () => {
                this.esconder()
                btn.esconder()
            })

        } else if (tipo == 'excluir') {
            this.boxTitulo.classList.add('mensagemExcluir')
            this.boxTitulo.innerHTML = titulo
            btn.criar('boxRodape', 'excluir', 'Fechar')

            const fechar = document.getElementById('btnsair');
            fechar.addEventListener('click',  () => {
                this.esconder()
                btn.esconder()
            })

        } else if (tipo == 'info') {
            this.boxTitulo.classList.add('mensagemInfo')
            this.boxTitulo.innerHTML = titulo
            btn.criar('boxRodape', 'info', 'Fechar')

            const fechar = document.getElementById('btnsair');
            fechar.addEventListener('click', () => {
                this.esconder()
                btn.esconder()
            })

        }  else if (tipo == 'enviar') {
            this.boxTitulo.classList.add('mensagemEnviar')
            this.boxTitulo.innerHTML = titulo
            btn.criar('boxRodape', 'enviar', 'Fechar')

            const fechar = document.getElementById('btnsair');
            fechar.addEventListener('click',  () => {
                this.esconder()
                btn.esconder()
            })

        }  else if (tipo == 'pesquisar') {
            this.boxTitulo.classList.add('mensagemPesquisar')
            this.boxTitulo.innerHTML = titulo
            btn.criar('boxRodape', 'pesquisar', 'Fechar')

            const fechar = document.getElementById('btnsair');
            fechar.addEventListener('click',  () => {
                this.esconder()
                btn.esconder()
            })

        }  else if (tipo == 'config') {
            this.boxTitulo.classList.add('mensagemConfig')
            this.boxTitulo.innerHTML = titulo
            btn.criar('boxRodape', 'config', 'Fechar')

            const fechar = document.getElementById('btnsair');
            fechar.addEventListener('click',  () => {
                this.esconder()
                btn.esconder()
            })

        } else {
            this.local.remove()
        }      

    }

    esconder = () => {
        this.janelaMensagem.remove()
    }
}

export default CaixaMensagem
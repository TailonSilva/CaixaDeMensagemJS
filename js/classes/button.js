class Button {
        
    criar = (elemento, tipo, titulo) => {
        this.local = document.getElementById(elemento)
        this.button = document.createElement('button')

        this.texto_btn = '<p id="texto'+elemento+'"></p>'
        this.barra = '<div class="barra"></div>'
        this.imagem = '<img id="icone'+elemento+'" class="icone" src="#">'

        this.button.innerHTML = this.texto_btn+this.barra+this.imagem
        this.button.setAttribute('id', 'btnsair')

        this.local.appendChild(this.button)
        
        this.icone = document.getElementById('icone'+elemento)
        this.texto = document.getElementById('texto'+elemento)
        
        if(tipo == 'alerta') {
            this.button.classList.add('alerta')
            this.icone.setAttribute('src', './img/iconeButton/alerta.png')
            this.texto.innerHTML = titulo
        } else if (tipo == 'sucesso') {
            this.button.classList.add('sucesso')
            this.icone.setAttribute('src', './img/iconeButton/check.png')
            this.texto.innerHTML = titulo
        } else if (tipo == 'excluir') {
            this.button.classList.add('excluir')
            this.icone.setAttribute('src', './img/iconeButton/lixeira.png')
            this.texto.innerHTML = titulo
        } else if (tipo == 'info') {
            this.button.classList.add('info')
            this.icone.setAttribute('src', './img/iconeButton/info.png')
            this.texto.innerHTML = titulo
        }  else if (tipo == 'enviar') {
            this.button.classList.add('enviar')
            this.icone.setAttribute('src', './img/iconeButton/enviar.png')
            this.texto.innerHTML = titulo
        }  else if (tipo == 'pesquisar') {
            this.button.classList.add('pesquisa')
            this.icone.setAttribute('src', './img/iconeButton/pesquisa.png')
            this.texto.innerHTML = titulo
        }  else if (tipo == 'config') {
            this.button.classList.add('config')
            this.icone.setAttribute('src', './img/iconeButton/config.png')
            this.texto.innerHTML = titulo
        } else {
            this.local.remove()
            this.button.remove()
        }
    }

    esconder = () => {
        this.local.remove()
        this.button.remove()
    }
}

export default Button
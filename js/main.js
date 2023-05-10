import CaixaMensagem from "./classes/caixaMensagem.js"
import Button from "./classes/button.js"

let mensagem = new CaixaMensagem()
let btn = new Button

const btn_verde = document.getElementById('verde')
const btn_vermelho = document.getElementById('vermelho')
const btn_cinza = document.getElementById('cinza')
const btn_amarelo = document.getElementById('amarelo')

btn.criar('verde', 'sucesso', 'Botao Verde')

btn_verde.addEventListener('click', () => {
    mensagem.mostar('sucesso', 'Parabéns', 'Cliente Incluido com Sucesso!')
})

btn.criar('vermelho', 'alerta', 'Botao Vermelho')

btn_vermelho.addEventListener('click', () => {
    mensagem.mostar('alerta', 'Alerta', 'Esta operação pode danificar seu sistema!')
})

btn.criar('cinza', 'excluir', 'Botao Cinza')

btn_cinza.addEventListener('click', () => {
    mensagem.mostar('excluir', 'Exclindo...', 'Seus dados Foram Excluidos com Sucesso!')
})

btn.criar('amarelo', 'info', 'Botao Amarelo')

btn_amarelo.addEventListener('click', () => {
    mensagem.mostar('info', 'Importante', 'Não faça exclusão de dados sem confirmar todas as informações!')
})


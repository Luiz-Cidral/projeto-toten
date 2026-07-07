import { defineStore } from 'pinia'

export const usePedidoStore = defineStore('pedido', {
  state: () => ({
    hamburguer: 'Nenhum hambúrguer selecionado.',
    hamburguerPreco: 0,
    extra: 'Nenhum extra selecionado.',
    extraPreco: 0,
    bebida: 'Nenhuma bebida selecionada.',
    bebidaPreco: 0,
    numeroPedido: 0
  }),
  
  getters: {
    valorTotal: (state) => {
      return state.hamburguerPreco + state.extraPreco + state.bebidaPreco
    }
  },
  
  actions: {
    definirHamburguer(nome, preco) {
      this.hamburguer = nome
      this.hamburguerPreco = Number(preco)
    },
    definirExtra(nome, preco) {
      this.extra = nome
      this.extraPreco = Number(preco)
    },
    definirBebida(nome, preco) {
      this.bebida = nome
      this.bebidaPreco = Number(preco)
    },
    removerItem(tipo) {
      if (tipo === 'hamburguer') {
        this.hamburguer = 'Nenhum hambúrguer selecionado.'
        this.hamburguerPreco = 0
      } else if (tipo === 'extra') {
        this.extra = 'Nenhum extra selecionado.'
        this.extraPreco = 0
      } else if (tipo === 'bebida') {
        this.bebida = 'Nenhuma bebida selecionada.'
        this.bebidaPreco = 0
      }
    },
    gerarNumeroPedido() {
      this.numeroPedido = Math.floor(Math.random() * 100) + 1
    },
    resetarPedido() {
      this.hamburguer = 'Nenhum hambúrguer selecionado.'
      this.hamburguerPreco = 0
      this.extra = 'Nenhum extra selecionado.'
      this.extraPreco = 0
      this.bebida = 'Nenhuma bebida selecionada.'
      this.bebidaPreco = 0
      this.numeroPedido = 0
    }
  }
})


<script setup>
import { useRouter } from "vue-router";
import { usePedidoStore } from "../stores/pedido";

const router = useRouter();
const pedidoStore = usePedidoStore(); 

function confirmarPedido() {
  if (pedidoStore.valorTotal === 0) {
    alert("Selecione pelo menos um item antes de confirmar!");
    return;
  }
  
  pedidoStore.gerarNumeroPedido(); 
  router.push("/success");
}
</script>

<template>
  <main>
    <!-- ---------- BANNER ---------- -->
    <section class="banner">
      <h1>Confirme seu <span>Pedido</span></h1>
      <p>Confira os itens escolhidos antes de finalizar.</p>
    </section>

    <!-- ---------- RESUMO ---------- -->
    <section class="white-itens">
      <div class="resumo-card">
        <h2>Resumo do Pedido</h2>

        <!-- Hambúrguer -->
        <div class="item-resumo">
          <div class="info-texto">
            <strong>Hambúrguer:</strong>
            <p>{{ pedidoStore.hamburguer }}</p>
          </div>
          <div class="preco-e-acoes">
            <span class="preco-item" v-if="pedidoStore.hamburguerPreco > 0">
              R$ {{ pedidoStore.hamburguerPreco.toFixed(2).replace('.', ',') }}
            </span>
            <button v-if="pedidoStore.hamburguerPreco > 0" @click="pedidoStore.removerItem('hamburguer')" class="btn-remover">X</button>
          </div>
        </div>

        <!-- Extra -->
        <div class="item-resumo">
          <div class="info-texto">
            <strong>Extra:</strong>
            <p>{{ pedidoStore.extra }}</p>
          </div>
          <div class="preco-e-acoes">
            <span class="preco-item" v-if="pedidoStore.extraPreco > 0">
              R$ {{ pedidoStore.extraPreco.toFixed(2).replace('.', ',') }}
            </span>
            <button v-if="pedidoStore.extraPreco > 0" @click="pedidoStore.removerItem('extra')" class="btn-remover">X</button>
          </div>
        </div>

        <!-- Bebida -->
        <div class="item-resumo">
          <div class="info-texto">
            <strong>Bebida:</strong>
            <p>{{ pedidoStore.bebida }}</p>
          </div>
          <div class="preco-e-acoes">
            <span class="preco-item" v-if="pedidoStore.bebidaPreco > 0">
              R$ {{ pedidoStore.bebidaPreco.toFixed(2).replace('.', ',') }}
            </span>
            <button v-if="pedidoStore.bebidaPreco > 0" @click="pedidoStore.removerItem('bebida')" class="btn-remover">X</button>
          </div>
        </div>

        <!-- TOTAL GERAL -->
        <div class="item-total">
          <strong>Total do Pedido:</strong>
          <span>R$ {{ pedidoStore.valorTotal.toFixed(2).replace('.', ',') }}</span>
        </div>

        <!-- BOTÃO CONFIRMAR -->
        <button @click="confirmarPedido" class="btn-confirmar">
          Confirmar Pedido
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ---------- BANNER ---------- */
.banner {
    text-align: center;
    padding: 50px 20px 30px;
}

.logo-final {
    max-width: 150px;
    height: auto;
    margin-bottom: 15px;
}

.banner h1 {
    font-size: 60px;
    color: #5d0d0d;
    margin: 0;
}

.banner span {
    display: block;
    color: #a31818;
    font-size: 80px;
    font-weight: bold;
}

.banner p {
    font-size: 24px;
    margin-top: 15px;
    color: #444;
}

/* ---------- ESTRUTURA DO CARD ---------- */
.white-itens {
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    width: 90%;
    margin: auto;
}

.resumo-card {
    background: white;
    width: 100%;
    max-width: 550px;
    padding: 35px;
    border-radius: 18px;
    text-align: center;
    box-shadow: 0px 5px 15px rgba(0,0,0,.15);
}

.resumo-card h2 {
    color: #5d0d0d;
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 32px;
}

/* ---------- LINHAS DE ITENS ---------- */
.item-resumo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
    font-size: 20px;
}

.info-texto {
    text-align: left;
}

.info-texto strong {
    color: #444;
}

.info-texto p {
    margin: 5px 0 0 0;
    color: #7d1616;
    font-weight: bold;
    font-size: 22px;
}

.preco-e-acoes {
    display: flex;
    align-items: center;
    gap: 15px;
}

.preco-item {
    font-weight: bold;
    color: #333;
    font-size: 20px;
}

/* ---------- BOTÃO REMOVER (X) ---------- */
.btn-remover {
    background: #a31818;
    color: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, transform 0.1s;
    padding: 0;
}

.btn-remover:hover {
    background: #5d0d0d;
    transform: scale(1.05);
}

/* ---------- TOTAL GERAL ---------- */
.item-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0 10px;
    font-size: 26px;
    border-top: 2px dashed #7d1616;
    margin-top: 20px;
}

.item-total strong {
    color: #5d0d0d;
}

.item-total span {
    color: #a31818;
    font-weight: bold;
    font-size: 30px;
}

/* ---------- BOTÃO CONFIRMAR PRINCIPAL ---------- */
.btn-confirmar {
    margin-top: 30px;
    width: 100%;
    background: #ffd54f;
    color: #5d0d0d;
    border: none;
    padding: 15px;
    font-size: 22px;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.15);
    transition: background 0.2s, transform 0.1s;
}

.btn-confirmar:hover {
    background: #ffca28;
    transform: translateY(-2px);
}

.btn-confirmar:active {
    transform: translateY(0);
}

/* ---------- RESPONSIVO ---------- */
@media(max-width: 600px) {
    .banner h1 {
        font-size: 40px;
    }
    .banner span {
        font-size: 55px;
    }
    .resumo-card {
        padding: 20px;
    }
    .item-resumo {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    .preco-e-acoes {
        width: 100%;
        justify-content: space-between;
        border-top: 1px dotted #eee;
        padding-top: 8px;
    }
    .item-total {
        font-size: 22px;
    }
    .item-total span {
        font-size: 24px;
    }
}
</style>
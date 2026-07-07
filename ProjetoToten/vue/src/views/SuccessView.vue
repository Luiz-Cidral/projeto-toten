<script setup>
import { ref } from "vue";
import { usePedidoStore } from "../stores/pedido";

const pedidoStore = usePedidoStore();
const menuAberto = ref(false);

function voltarInicio() {
  pedidoStore.resetarPedido(); 
  window.location.href = "/";
}
</script>

<template>
  <main>
    <section class="banner">
      <div class="sucesso-icon">🎉</div>
      <h1>Pedido <span>Confirmado!</span></h1>
      <p>Obrigado por comprar conosco. Seu pedido já foi enviado para a cozinha.</p>
    </section>

    <section class="white-itens">
      <div class="sucesso-card">
        <div class="senha-box">
          <p>SUA SENHA É</p>
          <h2>#{{ pedidoStore.numeroPedido }}</h2>
        </div>

        <div class="dropdown-container">
          <button @click="menuAberto = !menuAberto" class="btn-dropdown">
            {{ menuAberto ? '▲ Ocultar Detalhes do Pedido' : '▼ Ver Detalhes do Pedido' }}
          </button>
          
          <div v-if="menuAberto" class="dropdown-conteudo">
            <p><strong>🍔 Hambúrguer:</strong> {{ pedidoStore.hamburguer }}</p>
            <p><strong>🥓 Extra:</strong> {{ pedidoStore.extra }}</p>
            <p><strong>🥤 Bebida:</strong> {{ pedidoStore.bebida }}</p>
            <p style="margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
              <strong>💰 Total Pago:</strong> R$ {{ pedidoStore.valorTotal.toFixed(2).replace('.', ',') }}
            </p>
          </div>
        </div>

        <button @click="voltarInicio" class="btn-voltar">
          Iniciar Novo Pedido
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.banner { text-align: center; padding: 40px 20px 20px; }
.sucesso-icon { font-size: 70px; margin-bottom: 10px; }
.banner h1 { font-size: 50px; color: #5d0d0d; margin: 0; }
.banner span { display: block; color: #a31818; font-size: 70px; font-weight: bold; }
.banner p { font-size: 22px; color: #444; margin-top: 15px; }

.white-itens { display: flex; justify-content: center; padding-bottom: 50px; }
.sucesso-card { background: white; width: 100%; max-width: 450px; padding: 35px; border-radius: 18px; text-align: center; box-shadow: 0px 5px 15px rgba(0,0,0,.15); }

.senha-box { background: #f6efe6; padding: 20px; border-radius: 12px; margin-bottom: 25px; border: 2px dashed #7d1616; }
.senha-box p { margin: 0; font-size: 18px; color: #666; font-weight: bold; }
.senha-box h2 { margin: 5px 0 0; font-size: 55px; color: #a31818; }

/* Estilos do Dropdown */
.dropdown-container { margin-bottom: 25px; text-align: left; }
.btn-dropdown { background: #e0d5c1; color: #5d0d0d; border: none; width: 100%; padding: 12px; font-size: 18px; font-weight: bold; border-radius: 8px; cursor: pointer; text-align: center; }
.btn-dropdown:hover { background: #d4c5ad; }
.dropdown-conteudo { background: #fafafa; border: 1px solid #ddd; padding: 15px; border-radius: 0 0 8px 8px; margin-top: -2px; font-size: 18px; }
.dropdown-conteudo p { margin: 8px 0; color: #333; }

.btn-voltar { width: 100%; padding: 15px; font-size: 20px; }
</style>
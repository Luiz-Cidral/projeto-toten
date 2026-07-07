<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router"; 
import { usePedidoStore } from "../stores/pedido"; 

const router = useRouter(); 
const pedidoStore = usePedidoStore(); 

const burguers = reactive([
  { id: 1, title: "x-salada", description: "X-Salada", image: "x-salada.png", price: 18.50 },
  { id: 2, title: "x-bacon", description: "X-Bacon", image: "x-bacon.png", price: 22.00 },
  { id: 3, title: "x-calabresa", description: "X-Calabresa", image: "x-calabresa.png", price: 20.00 },
]);

function escolherBurguer(burguer) {
 
  pedidoStore.definirHamburguer(burguer.description, burguer.price);
  
  
  router.push("/extra");
}
</script>

<template>
  <main>
    <section class="banner">
      <h1>Escolha seu <span>Hambúrguer</span></h1>
      <p>Selecione uma opção para iniciar seu pedido.</p>
    </section>

    <section class="white-itens">
      <ul>
        <li v-for="burguer in burguers" :key="burguer.id">
          <img :src="'/img/' + burguer.image" :alt="burguer.title" class="foto-produto">
          <p>{{ burguer.description }}</p>
          <p class="preco">R$ {{ burguer.price.toFixed(2).replace('.', ',') }}</p>
          <button @click="escolherBurguer(burguer)">
            Escolher
          </button>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>

.preco {
  color: #7d1616;
  font-size: 22px !important;
  font-weight: bold;
  margin-bottom: 15px !important;
}


/* ---------- BANNER ---------- */
.banner {
    text-align: center;
    padding: 50px 20px 30px;
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

/* ---------- PRODUTOS ---------- */
.white-itens {
    width: 90%;
    margin: auto;
    padding-bottom: 50px;
}

.white-itens ul {
    display: flex;
    justify-content: center;
    gap: 40px;
    list-style: none;
    flex-wrap: wrap;
    padding: 0;
}

/* ---------- CARD ---------- */
.white-itens li {
    background: white;
    width: 250px;
    padding: 25px;
    border-radius: 18px;
    text-align: center;
    box-shadow: 0px 5px 15px rgba(0,0,0,.15);
    transition: .3s;
}

.white-itens li:hover {
    transform: translateY(-5px);
}

.foto-produto {
    max-width: 100%;
    height: auto;
    max-height: 150px;
    object-fit: contain;
    margin-bottom: 15px;
}

/* ---------- NOME ---------- */
.white-itens p {
    font-size: 28px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 25px;
    color: #333;
}

/* ---------- RESPONSIVO ---------- */
@media(max-width: 900px) {
    .banner h1 {
        font-size: 40px;
    }
    .banner span {
        font-size: 55px;
    }
}
</style>
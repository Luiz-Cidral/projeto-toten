

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router"; 
import { usePedidoStore } from "../stores/pedido"; // Importa o Pinia gerenciador de estado

const router = useRouter(); 
const pedidoStore = usePedidoStore();

// Lista de bebidas igual à que você tinha estruturado
const bebidas = reactive([
  { id: 1, title: "coca-cola", description: "Refrigerante Sabor Cola", image: "refrigerante.png", price: 6.00 },
  { id: 2, title: "suco", description: "Suco de Laranja", image: "suco.png", price: 7.50 },
  { id: 3, title: "agua", description: "Água Mineral", image: "agua.png", price: 4.00 },
]);

function escolherBebida(bebida) {
  
  pedidoStore.definirBebida(bebida.description, bebida.price);
  
  
  
  
  router.push("/check");
}
</script>

<template>
  <main>
    <!-- ---------- BANNER ---------- -->
    <section class="banner">
      <h1>Escolha sua <span>Bebida</span></h1>
      <p>Para acompanhar o seu lanche caprichado!</p>
    </section>

    <!-- ---------- ITENS ---------- -->
    <section class="white-itens">
      <div class="container-itens">
        <div v-for="bebida in bebidas" :key="bebida.id" class="card-item">
          <!-- Certifique-se que suas imagens de bebida estão em public/img/ -->
          <img :src="`/img/${bebida.image}`" :alt="bebida.description" class="img-produto">
          
          <h3>{{ bebida.description }}</h3>
          
          <p class="preco">R$ {{ bebida.price.toFixed(2).replace('.', ',') }}</p>
          
          <button @click="escolherBebida(bebida)">
            Selecionar
          </button>
        </div>
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

/* ---------- PRODUTOS ---------- */
.white-itens {
    width: 90%;
    margin: auto;
    padding-bottom: 50px;
}

.container-itens {
    display: flex;
    justify-content: center;
    gap: 40px;
    list-style: none;
    flex-wrap: wrap;
    padding: 0;
}

/* ---------- CARD ---------- */
.card-item {
    background: white;
    width: 250px;
    padding: 25px;
    border-radius: 18px;
    text-align: center;
    box-shadow: 0px 5px 15px rgba(0,0,0,.15);
    transition: .3s;
}

.card-item:hover {
    transform: translateY(-5px);
}

.img-produto {
    max-width: 100%;
    height: auto;
    max-height: 150px;
    object-fit: contain;
    margin-bottom: 15px;
}

/* ---------- NOME ---------- */
.card-item h3 {
    font-size: 28px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 25px;
    color: #333;
}

/* ---------- PREÇO ---------- */
.preco {
    color: #7d1616;
    font-size: 22px !important;
    font-weight: bold;
    margin-bottom: 15px !important;
}


button {
    width: 100%;
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
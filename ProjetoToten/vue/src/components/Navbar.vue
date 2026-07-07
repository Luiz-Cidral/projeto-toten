
    <script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li class="logo">
          <img src="@/assets/img/logosemfundo.png" alt="Logo Hamburgueria">
        </li>
        
        <div class="menu-links">
          <li><RouterLink to="/">Hambúrguer</RouterLink></li>
          <li><RouterLink to="/extra">Extra</RouterLink></li>
          <li><RouterLink to="/bebida">Bebida</RouterLink></li>
          <li><RouterLink to="/check">Resumo</RouterLink></li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
    background: #7d1616;
    padding: 20px 0;
}

nav ul {
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 20px;
}

.logo img {
    max-width: 480px; 
    height: auto;
    display: block;
}


.menu-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
}

.menu-links li {
    margin: 0 30px; 
    list-style: none;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 5px;
    transition: color 0.2s;
}

nav a:hover {
    color: #ffd54f;
}


.router-link-active {
    color: #ffd54f;
    border-bottom: 3px solid #ffd54f;
}


@media(max-width: 600px) {
    .logo img {
        max-width: 220px;
    }
    
    .menu-links li {
        margin: 10px 15px; 
    }
    
    nav a {
        font-size: 18px; 
    }
}
</style>
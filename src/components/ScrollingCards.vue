<template>
    <div class="scrolling-cards">
      <div class="card" v-for="card in cards" :key="card.id">
        <img :src="card.image" :alt="card.title">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const cards = ref([
    { id: 1, title: '明星保姆車（9人座）', description: '最頂級的奢華享受', image: '/src/assets/images/保母車.jpg' },
    { id: 2, title: '賓士Vito（9人座）', description: '舒適寬敞的內部空間', image: '/src/assets/images/vito.jpg' },
    { id: 3, title: '賓士250D(8人座）', description: '商務的理想選擇', image: '/src/assets/images/250d.jpg' },
    { id: 4, title: '賓士轎車（4人座）', description: '專業形象的完美代表', image: '/src/assets/images/A180.jpg' },
    { id: 5, title: '中型遊覽車（23人座）', description: '家族出遊，就靠這台', image: '/src/assets/images/23.jpg' },
    { id: 6, title: '大型遊覽車（43人座）', description: '全班畢旅，一台就夠', image: '/src/assets/images/43.jpg' },
  ]);
  </script>
  
  <style scoped>
  .scrolling-cards {
    display: flex;
    overflow-x: auto;
    padding: 20px 0;
    gap: 20px;
  }
  
  .card {
    min-width: 250px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 20px;
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .card h3 {
    margin: 10px 0;
  }
  </style>
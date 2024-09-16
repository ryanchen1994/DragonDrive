<template>
  <div class="services">
    <h1 class="section-title">我們的服務</h1>
    <div class="image-container" :style="{ backgroundImage: `url(${servicesImage})` }"></div>
    <div class="service-list">
      <div v-for="service in services" :key="service.id" class="service-item">
        <img :src="service.image" :alt="service.title">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import servicesImage from '../assets/images/dashboard-3510327_1280.jpg';
import tourImage from '../assets/images/tour.jpg';
import airportImage from '../assets/images/airport-3511342_1280.jpg';
import businessImage from '../assets/images/iocenters-2673328_1280.jpg';
import weddingImage from '../assets/images/wedding-2954545_1280.jpg';
import longTripImage from '../assets/images/pexels-artemioz-5930966.jpg';
import eventImage from '../assets/images/artist-3480274_1280.jpg';
import luxuryImage from '../assets/images/S__11903127_0.jpg';
import driverImage from '../assets/images/driver-3978839_1280.jpg';

const services = ref([
  { id: 1, title: '包車旅遊', description: '適合周末出遊或連假旅行的靈活租車選擇。', image: tourImage },
  { id: 2, title: '機場接送', description: '提供方便的機場接送服務，讓您的旅程更加輕鬆。', image: airportImage },
  { id: 3, title: '商業接待', description: '專業司機和豪華車款服務。', image: businessImage },
  { id: 4, title: '婚禮車隊', description: '婚禮專屬車隊服務，增加儀式感。', image: weddingImage },
  { id: 5, title: '長途出差', description: '跨城市出差免擔心。', image: longTripImage },
  { id: 6, title: '大型活動接送', description: '提供團體接送服務。', image: eventImage },
  { id: 7, title: '豪華車體驗', description: '高端車款租賃。', image: luxuryImage },
  { id: 8, title: '專業司機', description: '經驗豐富的專業駕駛。', image: driverImage }
]);
</script>

<style scoped>
.services {
  text-align: center;
}

.image-container {
  width: 100%;
  height: 300px; /* 確保這裡有定義高度 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 一排4個 */
  gap: 20px;
  margin-top: 2rem;
}

.service-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.service-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* 當螢幕寬度小於 1200px 時，每行顯示3個卡片 */
@media (max-width: 1200px) {
  .service-list {
    grid-template-columns: repeat(3, 1fr);
  }

  .image-container {
    width: 100%; /* 在小屏幕上，圖片容器寬度為 100% */
    max-width: none; /* 移除最大寬度限制 */
    height: 250px;
  }
}

/* 當螢幕寬度小於 768px 時，每行顯示2個卡片 */
@media (max-width: 768px) {
  .service-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .image-container {
    width: 100%; /* 在小屏幕上，圖片容器寬度為 100% */
    max-width: none; /* 移除最大寬度限制 */
    height: 200px;
  }
}

/* 當螢幕寬度小於 480px 時，每行顯示1個卡片 */
@media (max-width: 480px) {
  .service-list {
    grid-template-columns: 1fr;
  }

  .image-container {
    width: 100%; /* 在小屏幕上，圖片容器寬度為 100% */
    max-width: none; /* 移除最大寬度限制 */
    height: 100px;
  }
}
</style>

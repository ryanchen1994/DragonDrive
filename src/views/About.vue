<template>
  <div class="about">
    <h1 class="section-title">關於我們</h1>
    <div class="image-container" :style="{ backgroundImage: `url(${aboutImage})` }"></div>
    <p>龍行天下小客車租賃股份有限公司成立於1989年，致力於提供高品質、安全可靠的小客車租賃服務。</p>
    <h2>我們的優勢</h2>
    <div class="advantages">
      <div class="advantage-item" v-for="item in advantages" :key="item.title">
        <i :class="item.icon"></i>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import aboutImage from '../assets/images/benz.png';
import { useHead } from '@vueuse/head';

useHead({
  title: '關於我們 - 龍行天下',
  meta: [
    { name: 'description', content: '了解更多關於龍行天下小客車租賃公司及我們的服務歷史和使命。' },
    { name: 'keywords', content: '關於我們, 龍行天下, 小客車租賃' }
  ]
});

const advantages = [
  { icon: 'fas fa-car', title: '豐富的車型選擇', description: '從經濟型到豪華車款，滿足不同需求' },
  { icon: 'fas fa-headset', title: '專業的客戶服務', description: '24小時全天候支援' },
  { icon: 'fas fa-shield-alt', title: '完整的服務範圍', description: '全台灣皆可提供服務' },
  { icon: 'fas fa-calendar-alt', title: '專業的駕駛司機', description: '經驗豐富的駕駛人員' },
  { icon: 'fas fa-star', title: '豪華的乘車體驗', description: '提供高品質的服務' },
  { icon: 'fas fa-bus-alt', title: '便利的接送服務', description: '機場接送或市區服務' }
];
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
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

.advantages {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 一排3個 */
  gap: 20px;
  margin-top: 2rem;
}

.advantage-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.advantage-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.advantage-item i {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .advantages {
    grid-template-columns: repeat(2, 1fr); /* 中等螢幕調整為2個一排 */
  }

  .image-container {
    width: 100%; /* 在小屏幕上，圖片容器寬度為 100% */
    max-width: none; /* 移除最大寬度限制 */
    height: 200px;
  }
}

@media (max-width: 480px) {
  .advantages {
    grid-template-columns: 1fr; /* 手機上每排1個 */
  }

  .image-container {
    width: 100%; /* 在小屏幕上，圖片容器寬度為 100% */
    max-width: none; /* 移除最大寬度限制 */
    height: 100px;
  }
}
</style>

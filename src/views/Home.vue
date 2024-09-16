<template>
  <div class="home">
    <div class="hero">
      <div class="overlay">
        <h1>歡迎來到龍行天下小客車租賃</h1>
        <p>我們提供優質的小客車租賃服務，讓您的旅程更加舒適和便利。</p>
      </div>
    </div>
    <div class="intro">
      <h2>為什麼選擇我們？</h2>
      <p>龍行天下小客車租賃公司擁有多年的租車服務經驗，我們的車隊包含各種類型的車輛，從經濟型到豪華車款應有盡有，每種車型均有配備專業的司機，1人包車到全班旅遊都能提供服務。</p>
    </div>
    <ScrollingCards />
    <div class="cta-buttons">
      <router-link to="/services" class="btn">查看我們的服務</router-link>
      <router-link to="/contact" class="btn">立即聯繫我們</router-link>
    </div>
  </div>
</template>

<script setup>
import ScrollingCards from '../components/ScrollingCards.vue';
</script>

<style scoped>
.home {
  text-align: center;
}

.hero {
  /* 設置背景圖片 */
  background-image: url('../assets/images/home-bg.png');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 4rem 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.overlay {
  /* 加一層遮罩讓文字看起來更清楚 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色遮罩 */
  padding: 4rem;
  display: inline-block;
  border-radius: 8px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold; /* 粗體字 */
  color: white; /* 保持白色字體 */
}

.hero p {
  font-size: 1.25rem;
  color: white; /* 保持白色字體 */
  font-weight: bold; /* 粗體字 */
}

.intro {
  max-width: 800px;
  margin: 0 auto 2rem;
}

.cta-buttons {
  margin: 2rem 0;
}

.cta-buttons .btn {
  margin: 0 10px;
}
</style>

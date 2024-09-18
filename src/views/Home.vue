<template>
  <div class="home">
    <div class="hero">
      <div class="overlay">
        <h1>歡迎來到龍行天下</h1>
        <h1>小客車租賃(股)有限公司</h1>
        <p>我們提供優質的小客車租賃服務，讓您的旅程更加舒適和便利。</p>
      </div>
    </div>
    <div class="intro">
      <h2>為什麼選擇我們？</h2>
      <p>龍行天下小客車租賃公司擁有多年的租車服務經驗，我們的車隊包含各種類型的車輛，從經濟型到豪華車款應有盡有，每種車型均有配備專業的司機，個人包車到全班旅遊都能提供服務。</p>
    </div>
    <div class="intro">
      <h2>車型介紹</h2>
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
import { useHead } from '@vueuse/head';

// 設定頁面的 meta 信息
useHead({
  title: '龍行天下 - 小客車租賃服務',
  meta: [
    { name: 'description', content: '龍行天下小客車租賃提供優質的租車服務，讓您的旅程更加舒適和便利。' },
    { name: 'keywords', content: '小客車租賃, 租車服務, 龍行天下, 高品質服務, 台中租車, 租車, 機場接送, 婚禮接送, 賓士九人座, 保母車, 保姆車, 租遊覽車, 租車旅遊' },
  ]
});
</script>

<style scoped>
.home {
  text-align: center;
}

.hero {
  background-image: url('../assets/images/home-bg.png');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 0; /* 移除內邊距 */
  margin: 0; /* 移除外邊距 */
  position: relative;
  /* 若要與頂端列無間隙，可加入以下樣式以確保與頂端列對齊 */
  margin-top: -4rem; /* 如有需要可調整此值，若 header 高度為 4rem 可設定為此值 */
}


.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4rem;
  display: inline-block;
  border-radius: 8px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
}

.hero p {
  font-size: 1.25rem;
  color: white;
  font-weight: bold;
}

.intro {
  max-width: 800px;
  margin: 0 auto 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 15px; /* 按鈕之間的距離 */
  margin-top: 2rem;
  flex-wrap: wrap; /* 當螢幕寬度不足時，按鈕自動換行 */
  max-width: 100%; /* 確保容器不會超過螢幕寬度 */
  padding: 0 10px; /* 增加手機邊距，避免按鈕靠得太近 */
}

.btn {
  display: inline-block;
  padding: 12px 24px; /* 內邊距，讓按鈕大小更合適 */
  background-color: #0511388f; /* 按鈕背景色，深藍色 */
  color: white; /* 文字顏色，白色 */
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none; /* 移除預設的下劃線 */
  border-radius: 8px; /* 圓角按鈕 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加陰影，讓按鈕更立體 */
  transition: background-color 0.3s ease, transform 0.3s ease; /* 添加過渡效果 */
}

.btn:hover {
  background-color: #0056b3; /* 懸停時變得更深的藍色 */
  transform: translateY(-3px); /* 懸停時按鈕略微上升 */
}

.btn:active {
  background-color: #00408a; /* 點擊時的按鈕背景色 */
  transform: translateY(1px); /* 點擊時按鈕微微下降 */
}

/* --- 手機直式優化 --- */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem; /* 減少 padding 確保內容不會擁擠 */
  }

  .overlay {
    padding: 2rem; /* 減少 overlay 的內邊距 */
  }

  .hero h1 {
    font-size: 1.8rem; /* 減小標題字體大小 */
  }

  .hero p {
    font-size: 1rem; /* 減小段落字體大小 */
  }

  .cta-buttons {
    flex-direction: column; /* 在小螢幕上按鈕垂直堆疊 */
    align-items: center; /* 讓按鈕在垂直堆疊時置中 */
    width: 100%; /* 容器佔據全寬 */
    padding: 0 0px; /* 給兩側增加內邊距，避免按鈕靠邊 */
  }

  .btn {
    width: 80%; /* 按鈕在手機上全寬 */
    margin-bottom: 10px; /* 按鈕之間的間距 */
  }
}
</style>

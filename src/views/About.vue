<template>
  <div class="about">
    <h1 class="section-title">關於我們</h1>
    <div class="image-container" style="background-image: url('/src/assets/images/benz.png')"></div>
    <p>龍行天下小客車租賃股份有限公司成立於1989年，致力於提供高品質、安全可靠的小客車租賃服務。我們的使命是讓每一位客戶都能享受到方便、舒適的旅程。</p>
    <h2>我們的優勢</h2>
    <div class="advantages">
      <div class="advantage-item">
        <i class="fas fa-car"></i>
        <h3>豐富的車型選擇</h3>
        <p>從經濟型到豪華車款，滿足不同需求</p>
      </div>
      <div class="advantage-item">
        <i class="fas fa-headset"></i>
        <h3>專業的客戶服務</h3>
        <p>24小時全天候支援，解決您的所有疑問</p>
      </div>
      <div class="advantage-item">
        <i class="fas fa-shield-alt"></i>
        <h3>完整的服務範圍</h3>
        <p>全台灣皆可提供服務，輕鬆抵達全台各地</p>
      </div>
      <div class="advantage-item">
        <i class="fas fa-calendar-alt"></i>
        <h3>專業的駕駛司機</h3>
        <p>經驗豐富的駕駛人員，為您提供安全、準時且舒適的體驗</p>
      </div>
      <div class="advantage-item">
        <i class="fas fa-shield-alt"></i>
        <h3>豪華的乘車體驗</h3>
        <p>商務、婚禮等場合均提供高品質服務，滿足您的各種需求</p>
      </div>
      <div class="advantage-item">
        <i class="fas fa-shield-alt"></i>
        <h3>便利的接送服務</h3>
        <p>無論是機場接送或市區服務，專業司機會準時到達，讓您輕鬆享受無縫接駁</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 可以在這裡添加任何需要的邏輯
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

.advantages {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 一排固定3個 */
  gap: 20px;
  margin-top: 2rem;
}

.advantage-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 加入過渡效果 */
}

.advantage-item:hover {
  transform: translateY(-10px); /* 當滑鼠懸停時，卡片上移 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 增加陰影的深度 */
}

.advantage-item i {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
  transition: color 0.3s ease; /* 圖示變化 */
}

.advantage-item:hover i {
  color: #0056b3; /* 當滑過時改變圖示顏色 */
}

</style>

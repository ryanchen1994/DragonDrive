<template>
  <div class="contact">
    <h1 class="section-title">聯繫我們</h1>
    <div class="image-container" :style="{ backgroundImage: `url(${contactImage})` }"></div>
    <div class="contact-content">
      <div class="contact-info">
        <h2>聯絡資訊</h2>
        <!-- 地圖超連結 -->
        <p>
          <i class="fas fa-map-marker-alt"></i> 
          地址：<a href="https://www.google.com/maps/search/?api=1&query=414台中市烏日區中華路185巷1號" target="_blank">
            台中市烏日區中華路185巷1號
          </a>
        </p>
        <!-- 電話超連結 -->
        <p>
          <i class="fas fa-phone"></i> 
          電話：<a href="tel:+886423366577">(04) 2336-6577</a>
        </p>
        <!-- LINE ID 超連結 -->
        <p>
          <i class="fas fa-envelope"></i> 
          LINE ID（要加@）：<a href="https://line.me/ti/p/@okg7834o" target="_blank">@okg7834o</a>
        </p>
        <!-- LINE 加好友連結 -->
        <p>
          <i class="fas fa-envelope"></i> 
          手機版直接加入好友：<a href="https://lin.ee/8uSn4Jo" target="_blank">https://lin.ee/8uSn4Jo</a>
        </p>
      </div>
      <div class="qr-code">
        <h2>官方 LINE 帳號</h2>
        <img src="../assets/images/qr-code.png" alt="店家 QR Code">
        <p>掃描上方 QR Code 加入好友</p>
      </div>
    </div>
    <div class="map">
      <h2>我們的位置</h2>
      <div class="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.6955721233376!2d120.63811597590514!3d24.11219897478948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693c13f0b5c749%3A0x14ff8d55a1581135!2z6b6N6KGM5aSp5LiL5bCP5a6i6LuK56ef6LOD6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1726465949029!5m2!1szh-TW!2stw" 
          style="border:0;"  
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import contactImage from '../assets/images/contact-us-1908762_1280.png';
import { useHead } from '@vueuse/head';

useHead({
  title: '聯繫我們 - 龍行天下小客車租賃',
  meta: [
    { name: 'description', content: '聯繫龍行天下小客車租賃，獲取更多信息或安排服務。我們的聯絡資訊包括地址、電話、LINE ID 和 QR Code。' },
    { name: 'keywords', content: '聯繫我們, 小客車租賃, 租車服務, 地址, 電話, LINE ID, QR Code' },
  ]
});

</script>



<style scoped>
.contact {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.image-container {
  width: 100%;
  height: 300px; /* 確保這裡有定義高度 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
}

.contact-info, .qr-code {
  flex-basis: 48%;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .contact-info, .qr-code {
    flex-basis: 100%;
  }

  .image-container {
    width: 100%; /* 在小屏幕上，圖片容器寬度為 100% */
    max-width: none; /* 移除最大寬度限制 */
    height: 200px;
  }
}

@media (max-width: 480px) {
  .contact-info, .qr-code {
    flex-basis: 100%;
  }

  .image-container {
    width: 100%; /* 在小屏幕上，圖片容器寬度為 100% */
    max-width: none; /* 移除最大寬度限制 */
    height: 100px;
  }
}

.contact-info h2, .qr-code h2 {
  margin-bottom: 1rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
}

.contact-info i {
  margin-right: 0.5rem;
  color: #007bff;
}

.qr-code img {
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
}

.map {
  margin-top: 2rem;
}

.map-container {
  position: relative;
  width: 100%;
  height: 450px; /* 設置一個固定高度 */
  overflow: hidden;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
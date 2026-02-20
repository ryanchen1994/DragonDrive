<template>
  <div class="recruit">
    <h1 class="section-title">人才招募</h1>
    
    <div class="intro-section">
      <p class="main-quote">誠徵專業駕駛夥伴，共創優質服務</p>
      <p>龍行天下小客車租賃股份有限公司致力於提供最高品質的接送服務。我們誠摯邀請經驗豐富、具備責任感的您加入我們的團隊。特別歡迎「二度就業」的大哥大姐，您的穩重與經驗是我們最寶貴的資產。</p>
    </div>

    <div class="recruit-details">
      <div class="detail-item">
        <i class="fas fa-id-card"></i>
        <h3>應徵資格</h3>
        <ul>
          <li>持有職業小客車駕照</li>
          <li>具備優良駕駛觀念，無重大違規</li>
          <li>服務態度親切、處事穩重</li>
          <li>歡迎二度就業者加入</li>
        </ul>
      </div>

      <div class="detail-item">
        <i class="fas fa-hand-holding-usd"></i>
        <h3>工作內容</h3>
        <ul>
          <li>機場接送</li>
          <li>商務接送</li>
          <li>包車旅遊</li>
        </ul>
      </div>
    </div>

    <div class="contact-action">
      <h2>歡迎聯繫面試</h2>
      <div class="action-buttons">
        <a href="tel:+886423366577" class="btn">📞 撥打專線 (04) 2336-6577</a>
        <a href="https://lin.ee/8uSn4Jo" target="_blank" class="btn btn-line">💬 加入官方 LINE 詢問</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: '人才招募 - 龍行天下',
  meta: [
    { name: 'description', content: '龍行天下小客車租賃誠徵專業司機夥伴，歡迎二度就業人士加入我們的專業團隊。' },
    { name: 'keywords', content: '人才招募, 司機招聘, 龍行天下, 二度就業, 職業駕駛' }
  ]
});
</script>

<style scoped>
/* 完全復刻 About.vue 的核心排版 */
.recruit {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.intro-section {
  margin-bottom: 3rem;
}

.main-quote {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

/* 採用跟 .advantages 一樣的 Grid 設定 */
.recruit-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 招募分兩欄最合適 */
  gap: 20px;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.detail-item {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left; /* 內容改為靠左比較好閱讀列表 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.detail-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.detail-item i {
  display: block;
  text-align: center;
  font-size: 2.5rem;
  color: #007bff; /* 跟你 About 頁面的圖標顏色一致 */
  margin-bottom: 1.5rem;
}

.detail-item h3 {
  text-align: center;
  margin-bottom: 1rem;
}

.detail-item ul {
  list-style: none;
  padding: 0;
}

.detail-item li {
  margin-bottom: 0.5rem;
  color: #666;
  position: relative;
  padding-left: 1.2rem;
}

.detail-item li::before {
  content: '•';
  color: #007bff;
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* 聯繫按鈕區塊 */
.contact-action {
  margin-top: 4rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

/* 採用跟 Home.vue 一致的按鈕風格 */
.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #0511388f; 
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

.btn-line {
  background-color: #28a745; /* LINE 綠色風格 */
}

/* RWD 響應式調整，對齊 About.vue */
@media (max-width: 768px) {
  .recruit-details {
    grid-template-columns: 1fr; /* 手機上一排一個 */
  }
  .action-buttons .btn {
    width: 100%;
  }
}
</style>
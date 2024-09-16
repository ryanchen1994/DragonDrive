<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="logo">龍行天下</router-link>
        <button class="menu-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <ul :class="{ open: isMenuOpen }">
          <li><router-link to="/" @click="toggleMenu">首頁</router-link></li>
          <li><router-link to="/about" @click="toggleMenu">關於我們</router-link></li>
          <li><router-link to="/services" @click="toggleMenu">提供服務</router-link></li>
          <li><router-link to="/contact" @click="toggleMenu">聯繫我們</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2024 龍行天下小客車租賃股份有限公司. 版權所有.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false); // 漢堡選單狀態

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap');

body {
  font-family: 'Noto Sans TC', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

#app {
  /* 取消 #app 的左右邊距，以實現與左右邊緣對齊 */
  padding: 0;
}

header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  /* 取消 header 的左右邊距 */
  padding: 0;
  /* 設定 header 內部的左右邊距為 0 */
  margin: 0;
  width: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 20px; /* 設定左右內邊距，這是內部的間距 */
  /* 確保 nav 不超出 header */
  box-sizing: border-box;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 25px;
}

.menu-toggle .bar {
  display: block;
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
  transition: all 0.3s ease;
}

.menu-toggle.open .bar:nth-child(1) {
  transform: rotate(45deg);
  position: absolute;
}

.menu-toggle.open .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.open .bar:nth-child(3) {
  transform: rotate(-45deg);
  position: absolute;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #007bff;
}

/* 手機RWD樣式 */
@media (max-width: 768px) {
  .menu-toggle {
    display: block; /* 漢堡選單在小螢幕上顯示 */
  }

  nav ul {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 60px;
    right: 0; /* 設定為 0 以確保選單右對齊 */
    background-color: #fff;
    width: 100%; /* 設定選單寬度為 100% */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    /* 確保選單內部內容的邊距 */
    box-sizing: border-box;
  }

  nav ul.open {
    display: flex; /* 顯示漢堡選單展開的選單 */
  }

  nav ul li {
    margin-bottom: 10px;
  }

  nav ul li a {
    color: #333;
    font-size: 18px;
  }
}

main {
  min-height: calc(100vh - 100px);
  padding: 2rem 0;
}

footer {
  text-align: center;
  padding: 1rem 0;
  background-color: #333;
  color: #fff;
  /* 取消 footer 的左右邊距 */
  margin: 0;
  width: 100%;
}
</style>


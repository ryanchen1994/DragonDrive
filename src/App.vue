<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="logo">龍行天下</router-link>
        <ul>
          <li><router-link to="/">首頁</router-link></li>
          <li><router-link to="/about">關於我們</router-link></li>
          <li><router-link to="/services">提供服務</router-link></li>
          <li><router-link to="/contact">聯繫我們</router-link></li>
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
// 可以在這裡添加任何需要的邏輯
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0 20px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
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

main {
  min-height: calc(100vh - 100px);
  padding: 2rem 0;
}

footer {
  text-align: center;
  padding: 1rem 0;
  background-color: #333;
  color: #fff;
}

.section-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.image-container {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
  border-radius: 10px;
}
</style>
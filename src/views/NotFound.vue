<template>
  <div class="not-found">
    <h1>404</h1>
    <p>页面未找到</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script setup lang="ts">
// 使用 <script setup> 的现代 Vue 3 语法
defineOptions({
  name: 'NotFound'
})
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.not-found h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #409eff;
}

.not-found p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.not-found a {
  color: #409eff;
  text-decoration: none;
  border: 1px solid #409eff;
  padding: 10px 20px;
  border-radius: 4px;
  transition: all 0.3s;
}

.not-found a:hover {
  background-color: #409eff;
  color: white;
}
</style>
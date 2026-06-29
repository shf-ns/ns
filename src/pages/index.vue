<script setup lang="ts">
import { Header, Sidebar } from '@/layout/index'
</script>

<template>
  <div class="app">
    <Header />
    <div class="main">
      <Sidebar />
      <div class="content">内容</div>
      <Sidebar />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.main {
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
}

.content {
  flex: 1;
}
</style>
<script setup lang="ts">
import Avatar from '@/component/avatar.vue'
import githubLink from '@/component/githubLink.vue'
</script>

<template>
  <div class="header">
    <div class="header-left">
      <div class="avatar">
        <Avatar />
      </div>
      <div class="divider"></div>
      <div class="name">shf-ns</div>
    </div>
    <div class="header-right">
      <githubLink />
      <div class="menu">
        <svg class="icon" width="100%" height="100%" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="#8a8a8a"
            d="M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z" />
          <path fill="#8a8a8a"
            d="M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z" />
          <path fill="#8a8a8a"
            d="M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 40px;
  background: var(--header-color);
  backdrop-filter: blur(10px);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.name {
  font-size: 18px;
}

.divider {
  width: 1px;
  height: 40px;
  background: #ccc;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
}

.menu {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.menu svg path {
  transition: fill 0.3s ease-in-out;
}

.menu:hover svg path {
  fill: #a3c6da;
}

@media (max-width: 768px) {
  .header {
    height: 70px;
    padding: 0 20px;
  }
}
</style>

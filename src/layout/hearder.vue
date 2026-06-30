<script setup lang="ts">
import Avatar from '@/component/avatar.vue'
import githubLink from '@/component/githubLink.vue'
import { Menu } from '@/layout'
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
      <Menu />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 40px;
  background: var(--header-color);
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

@media screen and (max-width: 768px) {
  .header {
    padding: 0 20px;
  }
}
</style>

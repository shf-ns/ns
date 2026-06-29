<script setup lang="ts">
import Avatar from '@/component/avatar.vue'
</script>

<template>
  <div class="header">
    <div class="header-left">
      <div>
        <Avatar />
      </div>
      <div class="divider"></div>
      <div>shf-ns</div>
    </div>
    <div class="header-right">
      <div>github</div>
      <div>菜单</div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 25px;
  background: var(--header-color);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 5px;
}

.divider {
  width: 1px;
  height: 40px;
  background: #ccc;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>

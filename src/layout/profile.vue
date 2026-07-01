<script setup lang="ts">
</script>

<template>
  <div class="profile">
    <div class="content">
      <div class="avatar">
        头像
      </div>
      <div class="name">shf-ns</div>
      <p>欢迎来到我的个人网站！</p>
    </div>
    <p class="quote">珍惜每一天</p>
  </div>
</template>

<style scoped>
.profile {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  background: var(--card-color);
}

.quote {
  background: var(--card-color);
}
</style>

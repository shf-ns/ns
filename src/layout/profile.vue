<script setup lang="ts">
import Avatar from '@/component/avatar.vue';

</script>

<template>
  <div class="profile">
    <div class="content">
      <div class="avatar">
        <Avatar />
      </div>
      <div class="name">shf-ns</div>
      <h4>欢迎来到我的个人网站！</h4>
    </div>
    <p class="quote">“珍惜每一天”</p>
  </div>
</template>

<style scoped>
.profile {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 325px;
  padding: 20px;
  border-radius: 10px;
  background: var(--card-color);
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

.name {
  font-size: 24px;
  font-weight: bold;
}

.description {
  font-size: 18px;
}

.quote {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  background: var(--card-color);
}
</style>

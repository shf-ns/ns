<script setup lang="ts">
import Avatar from '@/component/avatar.vue';

</script>

<template>
  <div class="profile">
    <div class="profile-content">
      <div class="profile-avatar">
        <Avatar />
      </div>
      <div class="profile-name">shf-ns</div>
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

.profile-content {
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
  box-shadow: var(--shadow-color);
}

.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-name {
  font-size: 24px;
  font-weight: bold;
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

@media (min-width: 768px) and (max-width: 1024px) {
  .profile-content {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .profile-content {
    height: 300px;
  }
}
</style>

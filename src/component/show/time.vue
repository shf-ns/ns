<script setup lang="ts">
</script>

<template>
  <div class="time">
    <p>年/月/日</p>
    <p>时:分:秒</p>
  </div>
</template>

<style scoped>
.time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 150px;
  padding: 20px;
  border-radius: 10px;
  background: var(--card-color);
}
</style>
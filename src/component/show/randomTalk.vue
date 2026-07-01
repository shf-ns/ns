<script setup lang="ts">
</script>

<template>
  <div class="random-talk">
    <p class="talk-content">随机话内容</p>
    <p class="talk-author">——《随机话作者》</p>
  </div>
</template>

<style scoped>
.random-talk {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 150px;
  padding: 20px;
  border-radius: 10px;
  background: var(--card-color);
}

.talk-author {
  text-align: right;
}
</style>
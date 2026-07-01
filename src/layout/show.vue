<script setup lang="ts">
import { Time, RandomTalk } from '@/component/show'
</script>

<template>
  <div class="show">
    <Time />
    <RandomTalk />
  </div>
</template>

<style scoped>
.show {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-top: 37px;
}

@media (max-width: 768px) {
  .show {
    margin-bottom: 20px;
  }
}
</style>
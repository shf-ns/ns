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
}
</style>
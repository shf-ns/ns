<script setup lang="ts">
import type { Time } from '@/types/time';
import { useComputeTime } from '@/utils/computeTime'
import { onMounted, onUnmounted, ref } from 'vue';

const time = ref<Time>({
  year: '',
  month: '',
  day: '',
  hour: '',
  minute: '',
  second: '',
})
const timer = ref<number | undefined>(undefined);

onMounted((): void => {
  timer.value = setInterval(() => {
    time.value = useComputeTime(new Date());
  }, 1000);
})

onUnmounted((): void => {
  clearInterval(timer.value);
})

</script>

<template>
  <div class="time">
    <p class="time-item">{{ time.hour }}:{{ time.minute }}:{{ time.second }}</p>
    <p class="time-item">{{ time.year }}/{{ time.month }}/{{ time.day }}</p>
  </div>
</template>

<style scoped>
.time {
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: space-evenly;
  width: 100%;
  height: 150px;
  padding: 20px 20px 20px 60px;
  border-radius: 10px;
  background: var(--card-color);
  box-shadow: var(--shadow-color);
}

.time-item {
  font-size: 35px;
  font-weight: bold;
}

.time-item:nth-child(2) {
  font-size: 18px;
  font-weight: normal;
}
</style>
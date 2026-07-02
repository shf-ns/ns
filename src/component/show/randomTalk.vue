<script setup lang="ts">
import { getTalk } from '@/utils/getTalk';
import type { Talk } from '@/types/talk';
import { onMounted, ref } from 'vue';

const talk = ref<Talk>({
  hitokoto: '',
  fromWho: '',
});

interface HitokotoResponse {
  id: number;
  hitokoto: string;
  type: string;
  from: string;
  from_who: string;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
}

onMounted(async (): Promise<void> => {
  const data: HitokotoResponse = await getTalk();
  talk.value = {
    hitokoto: data.hitokoto,
    fromWho: data.from_who ? data.from_who : data.from,
  };
});
</script>

<template>
  <div class="random-talk">
    <p class="talk-content">{{ talk.hitokoto }}</p>
    <p class="talk-author">——《{{ talk.fromWho }}》</p>
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
  box-shadow: var(--shadow-color);
}

.talk-content {
  font-size: 20px;
  font-weight: bold;
}

.talk-author {
  text-align: right;
}
</style>
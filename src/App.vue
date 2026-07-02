<script setup lang="ts">
import { Header, Sidebar, Profile, Show, Menu } from '@/layout'
import { onMounted, onUnmounted, ref } from 'vue'

const showMenu = ref<boolean>(false)
const handleReceive = (data: boolean): void => {
  showMenu.value = data;
}

const handleClickOutside = (event: MouseEvent): void => {
  const target = event.target as HTMLElement;
  if (showMenu.value && !target.closest('.menu')) {
    showMenu.value = false;
  }
}
onMounted((): void => {
  document.addEventListener('click', handleClickOutside);
});
onUnmounted((): void => {
  document.removeEventListener('click', handleClickOutside);
});

</script>

<template>
  <div class="app">
    <Header @send-message="handleReceive" />
    <Transition name="menu-slide">
      <Menu v-show="showMenu" />
    </Transition>
    <div class="main">
      <Sidebar />
      <div class="content">
        <Profile />
        <Show />
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.main {
  flex: 1;
  display: flex;
  width: 100%;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 150px;
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.2s ease-in-out;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    margin-top: 90px;
    gap: 0;
  }
}
</style>

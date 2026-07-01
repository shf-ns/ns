<script setup lang="ts">
</script>

<template>
  <div class="sidebar"></div>
</template>

<style scoped>
.sidebar {
  width: 20%;
  height: 100%;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar {
    width: 12%;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 10%;
  }
}
</style>

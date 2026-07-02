<script setup lang="ts">
</script>

<template>
  <div class="language">
    <span>语言：</span>
    <div class="language-select">
      <p>zn</p>
      <div class="divider"></div>
      <p>en</p>
    </div>
  </div>
</template>

<style scoped>
.language {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.language-select {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80px;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.divider {
  width: 1px;
  height: 100%;
  background-color: #ccc;
}
</style>
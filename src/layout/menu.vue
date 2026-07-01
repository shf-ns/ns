<script lang="ts" setup>
</script>

<template>
  <ul class="menu">
    <div class="item"></div>
    <li>语言</li>
    <li>主题</li>
  </ul>
</template>

<style scoped>
.menu {
  position: absolute;
  top: 72px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 190px;
  height: 90px;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: var(--menu-color);
  box-shadow: var(--shadow-color);
}

.item {
  position: absolute;
  top: -10%;
  left: 70%;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  background-color: var(--menu-color);
}

@media (max-width: 768px) {
  .menu {
    top: 65px
  }

  .item {
    left: 80%;
  }
}
</style>
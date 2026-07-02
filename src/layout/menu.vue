<script lang="ts" setup>
import { Language, Theme } from '@/component/menu'
</script>

<template>
  <ul class="menu">
    <div class="box"></div>
    <li>
      <Language />
    </li>
    <li>
      <Theme />
    </li>
  </ul>
</template>

<style scoped>
.menu {
  position: absolute;
  top: 72px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 190px;
  height: 110px;
  padding: 10px 5px;
  border-radius: 10px;
  background-color: var(--menu-color);
  box-shadow: var(--shadow-color);
}

.menu li {
  flex: 1;
  border-radius: 5px;
  padding: 0px 5px;
}

.menu li:active {
  background-color: rgba(0, 0, 0, 0.1);
}

.box {
  position: absolute;
  top: -7%;
  left: 73%;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  background-color: var(--menu-color);
}

@media (max-width: 768px) {
  .menu {
    top: 65px
  }

  .box {
    left: 83%;
  }
}
</style>
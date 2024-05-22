<template>
  <div class="flex flex-col min-h-screen">
    <nav-bar />
    <div class="flex-grow page mx-auto overflow-y-auto w-full">
      <slot />
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@src/components/common/nav-bar.vue';
import AppFooter from '@src/components/common/app-footer.vue';
</script>

<style scoped>
.page {
  margin-top: 4.5rem;
}
</style>

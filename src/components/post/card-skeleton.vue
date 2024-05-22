<template>
  <div class="border animate-pulse shadow relative rounded-xl">
    <div class="flex gap-2 items-center px-4 py-4">
      <div class="h-4 w-4 rounded-full bg-gray-200 animate-pulse" />
      <div class="animate-pulse bg-gray-200 h-4 w-full rounded-lg"></div>
    </div>
    <div class="max-height w-full animate-pulse bg-gray-200"></div>
    <div class="px-4 py-6">
      <div
        class="text-xl font-semibold mb-2 max-h-14 text-wrap h-6 truncate bg-gray-200 animate-pulse rounded-lg"
      ></div>
    </div>
    <div
      class="absolute bottom-2 px-4 font-medium text-sm animate-pulse rounded-lg h-4 left-4 bg-gray-200 w-1/2"
    ></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.max-height {
  height: 8.5rem;
}
</style>

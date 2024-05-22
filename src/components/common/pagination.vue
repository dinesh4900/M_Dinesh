<template>
  <div class="mt-5 flex items-center justify-center gap-2">
    <button
      @click="prevPage"
      :disabled="selectedPage <= 1"
      class="flex items-center p-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <PreviousIcon />
    </button>

    <button
      v-if="totalPages > 1"
      @click="changePage(1)"
      :class="[
        'px-4 py-2 rounded-full',
        {
          'bg-blue-500 text-white font-bold': selectedPage === 1,
          '': selectedPage !== 1,
        },
      ]"
    >
      1
    </button>

    <span v-if="startPage > 2" class="px-2">...</span>

    <span v-for="page in visiblePages" :key="page">
      <button
        @click="changePage(page)"
        :class="[
          'px-4 py-2 rounded-full',
          {
            'bg-blue-500 text-white font-bold': page === selectedPage,
            '': page !== selectedPage,
          },
        ]"
      >
        {{ page }}
      </button>
    </span>

    <span v-if="endPage < totalPages - 1" class="px-2">...</span>

    <button
      v-if="totalPages > 1"
      @click="changePage(totalPages)"
      :class="[
        'px-4 py-2 rounded-full',
        {
          'bg-blue-500 text-white font-bold': selectedPage === totalPages,
          '': selectedPage !== totalPages,
        },
      ]"
    >
      {{ totalPages }}
    </button>

    <button
      @click="nextPage"
      :disabled="selectedPage >= totalPages"
      class="flex items-center p-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <NextIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import NextIcon from '@src/components/common/icons/right-arrow.vue';
import PreviousIcon from '@src/components/common/icons/left-arrow.vue';

const emit = defineEmits(['update:model-value']);

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  limit: {
    type: Number,
    default: 0,
  },
});
const { total, limit } = toRefs(props);

const totalPages = computed(() => Math.ceil(total.value / limit.value));

const selectedPage = computed({
  set: (value) => emit('update:model-value', value),
  get: () => props.modelValue,
});

const maxVisiblePages = 5;

const startPage = computed(() => {
  if (selectedPage.value <= 2) {
    return 2;
  } else if (selectedPage.value >= totalPages.value - 2) {
    return totalPages.value - (maxVisiblePages - 2);
  } else {
    return selectedPage.value - 1;
  }
});

const endPage = computed(() => {
  if (selectedPage.value <= 2) {
    return Math.min(maxVisiblePages, totalPages.value - 1);
  } else if (selectedPage.value >= totalPages.value - 2) {
    return totalPages.value - 1;
  } else {
    return selectedPage.value + 1;
  }
});

const visiblePages = computed(() => {
  let pages = [];
  for (let i = startPage.value; i <= endPage.value; i++) {
    pages.push(i);
  }
  return pages;
});

const changePage = (page: number) => {
  if (page > 0 && page <= totalPages.value) {
    selectedPage.value = page;
  }
};

const prevPage = () => {
  if (selectedPage.value > 1) {
    selectedPage.value -= 1;
    changePage(selectedPage.value);
  }
};

const nextPage = () => {
  if (selectedPage.value < totalPages.value) {
    selectedPage.value += 1;
    changePage(selectedPage.value);
  }
};
</script>

<style scoped>
/* You can add additional styles if needed */
</style>

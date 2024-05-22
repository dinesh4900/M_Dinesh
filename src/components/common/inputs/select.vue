<template>
  <div class="relative inline-block w-full">
    <select
      class="appearance-none !bg-white border rounded-md text-gray-700 py-2 px-4 pr-8 h-12 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-full"
      v-model="selectedValue"
    >
      <option :value="null">{{ defaultLabel }}</option>
      <option v-for="option of options" :key="`${options}`" :value="option">
        {{ option[labelKey] || option }}
      </option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, toRefs } from 'vue';

const emit = defineEmits(['update:model-value']);
const props = defineProps({
  modelValue: {
    type: Object as PropType<Record<string, any>>,
    default: null,
  },
  options: {
    type: Array as PropType<Record<string, any>[]>,
    default: [],
  },
  labelKey: {
    type: String,
    default: '',
  },
  defaultLabel: {
    type: String,
    default: '',
  },
});

const { options, labelKey, defaultLabel } = toRefs(props);

const selectedValue = computed({
  set: (value) => emit('update:model-value', value),
  get: () => props.modelValue,
});
</script>

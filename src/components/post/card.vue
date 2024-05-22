<template>
  <div
    class="border shadow relative cursor-pointer rounded-xl"
    @click="handleSelect"
  >
    <div class="flex gap-2 items-center px-4 py-4">
      <div class="h-3 w-3 rounded-full" :style="colorDot" />
      <div>
        {{ selectedCategory || categoryName }}
      </div>
    </div>
    <div>
      <img
        :src="post?.post_thumbnail?.URL"
        alt="thumbnail image"
        class="w-full max-height object-cover object-center"
      />
    </div>
    <div class="px-4 py-6">
      <div class="text-xl font-semibold mb-2 max-h-14 text-wrap truncate">
        {{ post?.title }}
      </div>
    </div>
    <div class="absolute bottom-2 px-4 text-gray-400 font-medium text-sm">
      {{ timeAgo(post?.date) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, toRefs } from 'vue';
import { timeAgo } from '@src/helpers/date.helper';
import { IPost } from '@src/models/post.model';
import { useRouter } from 'vue-router';

const props = defineProps({
  post: {
    type: Object as PropType<IPost | null>,
    default: null,
  },
  index: {
    type: Number,
    default: 0,
  },
  selectedCategory: {
    type: String,
    default: '',
  },
});
const router = useRouter();
const { post, index } = toRefs(props);
const categoryName = computed(() => {
  if (!post.value?.categories) return '';
  const category = Object.keys(post.value?.categories);
  return category?.at(0) ?? '';
});
const colorDot = computed(() => {
  const odds = index.value % 4;
  const bg = { background: '#2596be' };
  switch (odds) {
    case 1:
      bg.background = '#fe4436';
      return bg;
    case 2:
      bg.background = '#623ab3';
      return bg;
    case 3:
      bg.background = '#45a896';
      return bg;
    default:
      bg.background = '#2596be';
      return bg;
  }
});
const handleSelect = () => {
  const slug = post.value?.slug;
  if (slug) {
    router.push(slug);
  }
};
</script>

<style scoped>
.max-height {
  height: 8.5rem;
}
</style>

<template>
  <div>
    <div class="text-3xl md:text-5xl font-semibold px-6">Latest articles</div>
    <div
      class="px-2 py-4 md:px-6 md:py-4 grid grid-cols-1 md:grid-cols-4 gap-6"
      v-if="!isLoading && posts.length > 0"
    >
      <post-card
        v-for="(post, idx) of posts"
        :key="post.title"
        :post="post"
        :index="idx"
        :selected-category="selectedCategory"
      />
    </div>
    <div
      class="px-2 py-4 md:px-6 md:py-4 grid grid-cols-1 md:grid-cols-4 gap-6"
      v-else-if="isLoading"
    >
      <PostCardSkeleton v-for="_ of 20" :key="Math.random()" />
    </div>
    <div v-else class="flex items-center justify-center h-40 text-gray-500">
      <empty-state />
    </div>
  </div>
</template>

<script setup lang="ts">
import PostCard from '@src/components/post/card.vue';
import PostCardSkeleton from '@src/components/post/card-skeleton.vue';
import EmptyState from '@src/components/post/empty-state.vue';

import { IPost } from '@src/models/post.model';
import { PropType, toRefs } from 'vue';
const props = defineProps({
  posts: {
    type: Object as PropType<IPost[]>,
    default: [],
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  selectedCategory: {
    type: String,
    default: '',
  },
});
const { posts, isLoading, selectedCategory } = toRefs(props);
</script>

<style scoped></style>

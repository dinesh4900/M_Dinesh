<template>
  <div v-if="author" className="flex flex-wrap items-center py-3 px-4 lg:px-0">
    <img
      :src="author?.avatar_URL || ''"
      alt="Girl in a jacket"
      width="50"
      class="rounded-full"
    />
    <div className="flex-1 px-4 text-start">
      <div className="font-semibold text-sm">
        {{ author?.name }}
      </div>
      <div className="text-gray-500 font-semibold text-xs">
        {{ formatDate(postDate) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IAuthor } from '@src/models/post.model';
import { PropType, toRefs } from 'vue';
import { formatDate } from '@src/helpers/date.helper';

const props = defineProps({
  author: {
    type: Object as PropType<IAuthor>,
    default: null,
  },
  postDate: {
    type: String,
    default: '',
  },
});

const { author, postDate } = toRefs(props);
</script>

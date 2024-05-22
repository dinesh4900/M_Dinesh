<template>
  <div v-if="postDetail">
    <img
      class="banner-img"
      :src="postDetail.featured_image"
      alt="banner-image"
    />
  </div>
  <div class="cms max-w-screen-lg mx-auto mt-8 text-left">
    <h1 class="font-bold text-2xl md:text-4xl mb-4 px-4 md:px-0">
      {{ postDetail?.title }}
    </h1>
    <post-author :author="postDetail?.author" :post-date="postDetail?.date" />
    <div
      class="mx-6 text-xs md:mx-auto md:text-base mb-8"
      v-html="postDetail?.content"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { IPost } from '@src/models/post.model';
import { usePostRepo } from '@src/repo/post.repo';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import PostAuthor from '@src/components/post/author.vue';

const { path } = useRoute();
const { findOnePost } = usePostRepo();
const postDetail = ref<IPost | null>(null);

const pageTitle = ref<string>('');

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};

const setTitle = (newTitle: string) => {
  pageTitle.value = newTitle;
  updateTitle(newTitle);
};

onMounted(async () => {
  const slug = path.replace('/', '');
  if (slug) {
    const result = await findOnePost(slug);
    postDetail.value = result;
  }
  setTitle(postDetail.value?.title ?? 'Truecaller Blog');
});
</script>
<stype lang="scss"></stype>

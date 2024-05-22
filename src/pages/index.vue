<template>
  <div>
    <header-banner />
    <div class="px-6 md:px-12 py-6 md:py-4">
      <div class="mb-4 ml-4 max-w-72">
        <input-select
          v-model="selectedCategory"
          :options="categoriesData"
          label-key="name"
          default-label="All Categories"
        />
      </div>

      <post-list
        :selected-category="selectedCategory?.name"
        :posts="postsList"
        :is-loading="isLoading"
      />

      <div v-if="postsList.length">
        <pagination v-model="currentPage" :total="postsCount" :limit="20" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostRepo } from '@src/repo/post.repo';
import { computed, onMounted, ref, watch } from 'vue';
import PostList from '@src/components/post/list.vue';
import pagination from '@src/components/common/pagination.vue';
import HeaderBanner from '@src/components/common/header-banner.vue';
import { IPost, ICategory } from '@src/models/post.model';
import InputSelect from '@src/components/common/inputs/select.vue';

const { findAllPosts, setPaging, findAllCategories } = usePostRepo();

const postsList = ref<IPost[]>([]);
const postsCount = ref<Number>();
const isLoading = ref(false);
const currentPage = ref(1);

const categoriesData = ref<ICategory[]>([]);
const selectedCategory = ref<ICategory | null>(null);

const pageTitle = ref<string>('');

const loadPosts = async () => {
  isLoading.value = true;
  setPaging(currentPage.value);
  const posts = await findAllPosts(selectedCategory?.value?.name);
  const categories = await findAllCategories();
  isLoading.value = false;
  postsList.value = posts?.posts ?? [];
  categoriesData.value = categories?.categories ?? [];
  postsCount.value = posts?.found ?? 0;
};

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};

const setTitle = (newTitle: string) => {
  pageTitle.value = newTitle;
  updateTitle(newTitle);
};

watch(currentPage, () => {
  loadPosts();
});

watch(selectedCategory, () => {
  currentPage.value = 1;
  loadPosts();
});

onMounted(() => {
  loadPosts();
  setTitle('Truecaller blog');
});
</script>

<style scoped></style>

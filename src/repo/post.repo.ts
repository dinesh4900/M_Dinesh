import { IPost, IPostsResult, ICategoryResults } from '@src/models/post.model';
import { postClient } from '../config/http-clients';
import { ref } from 'vue';

const initialPaging = {
  limit: 20,
  page: 1,
};
const postsEnpoint = 'rest/v1.1/sites/107403796/posts';
const categoriesEnpoint = 'rest/v1.1/sites/107403796/categories';
const paging = ref({ ...initialPaging });
export const usePostRepo = () => ({
  setPaging: (page: number = 1, limit: number = 20) => {
    paging.value.page = page;
    paging.value.limit = limit;
  },
  resetPaging: () => {
    Object.assign(paging, initialPaging);
  },
  findAllPosts: async (category: string = '') => {
    const urlParams = `${postsEnpoint}/?fields=slug,post_thumbnail,categories,post_thumbnail,title,date&number=${paging.value.limit}&page=${paging.value.page}&category=${category}`;
    const { data } = await postClient<IPostsResult>(urlParams);
    return data;
  },
  findAllCategories: async () => {
    const urlParams = `${categoriesEnpoint}`;
    const { data } = await postClient<ICategoryResults>(urlParams);
    return data;
  },
  findOnePost: async (slug: string) => {
    const urlParams = `${postsEnpoint}/slug:${slug}?fields=featured_image,title,author,content,date`;
    const { data } = await postClient<IPost>(urlParams);
    return data;
  },
});

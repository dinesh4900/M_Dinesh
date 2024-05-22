const BASE_POSTS_URL = import.meta.env.VITE_BASE_POSTS_URL;
export const postClient = async <ResultT = any, T = any>(
  urlParams: string,
  method?: 'GET' | 'POST',
  body?: T
) => {
  let data = null;
  let error = null;
  try {
    const result = await fetch(`${BASE_POSTS_URL}/${urlParams}`, {
      ...(method ? { method } : {}),
      ...(body ? { body: JSON.stringify(body) } : {}),
    });

    if (!result.ok) {
      const message = `An error has occurred: ${result.status}`;
      throw new Error(message);
    }
    data = (await result.json()) as ResultT;
  } catch (e) {
    error = e;
  } finally {
    return {
      data,
      error,
    };
  }
};

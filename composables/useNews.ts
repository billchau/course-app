import { type NewsArray } from '~/server/api/news.get';

export default async () =>
  useFetchWithCache<NewsArray>(
    `/api/news`
  );
// import { type NewsArray } from '~/server/api/news.get';
import { type News } from '@prisma/client'

export default async () =>
  useFetchWithCache<News[]>(
    `/api/news`
  );
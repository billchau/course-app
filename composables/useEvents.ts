import { type Events } from '@prisma/client';

export default async () =>
  useFetchWithCache<Events[]>(
    `/api/events`
  );
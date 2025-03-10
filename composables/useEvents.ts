import { type EventsArray } from '~/server/api/events.get';

export default async () =>
  useFetchWithCache<EventsArray>(
    `/api/events`
  );
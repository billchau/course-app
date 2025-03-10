import { type CourseArray } from '~/server/api/courses.get';

export default async () =>
  useFetchWithCache<CourseArray>(
    `/api/courses`
  );
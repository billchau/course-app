import type { CourseIndexArray } from "~/types/course";


export default async () =>
  useFetchWithCache<CourseIndexArray>(
    `/api/courseIndex`
  );
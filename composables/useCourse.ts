import type { CourseWithChapter } from "~/types/course";


export default async (
  course: string,
  chapter: string
) => 
  useFetchWithCache<CourseWithChapter>(
    `/api/courses/${course}/${chapter}`
  );

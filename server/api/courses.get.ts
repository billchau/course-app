import data from "~/server/seed/courses"

export type Chapter = { id: number; title: string; highlight: string; content: string; video_url: string; }

export type CourseArray = {
    id: number;
    title: string;
    description: string;
    chapters: Chapter[];
}[]

export default defineEventHandler(
  async (): Promise<CourseArray> => {
  const coursesArray = await data.courses as CourseArray
  return coursesArray;
});

import { type Course, PrismaClient, Prisma } from '@prisma/client';
import { type CourseIndexArray } from '~/types/course';
const prisma = new PrismaClient()
// export type ChapterIndex = { id: number; title: string; }

export default defineEventHandler(
  async (): Promise<CourseIndexArray> => {
  const coursesArray = await prisma.course.findMany({
    select: {
      id: true,
      title: true,
      chapters: {
        select: {
          id: true,
          title: true
        }
      },
    }
  }) 
  return coursesArray;
});

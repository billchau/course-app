import { type Course, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

// export type Chapter = { id: number; title: string; highlight: string; content: string; video_url: string; }

// export type CourseArray = {
//     id: number;
//     title: string;
//     description: string;
//     chapters: Chapter[];
// }[]

export default defineEventHandler(
  async (event): Promise<Course> => {
    const courseId = getRouterParam(event, 'course')
    const chapterId = getRouterParam(event, 'chapter')

  if (!courseId || !Number.isInteger(courseId) || !chapterId || !Number.isInteger(chapterId)) {
        throw createError({
          statusCode: 404,
          message: 'Lesson not found (1A)',
      })
  }
  const course = await prisma.course.findFirst({
    where: {
      id: parseInt(courseId),
      chapters: {
        every: {
          id: parseInt(chapterId)  
        }
      }
    }
  });

  if (!course) {
    throw createError({
      statusCode: 404,
      message: 'Lesson not found (1B)',
  })
  }

  return course
});

import { type Course, PrismaClient } from '@prisma/client';
import protectRoute from '~/server/utils/protectRoute';
import { CourseWithChapter } from '~/types/course';
const prisma = new PrismaClient()

// export type Chapter = { id: number; title: string; highlight: string; content: string; video_url: string; }

// export type CourseArray = {
//     id: number;
//     title: string;
//     description: string;
//     chapters: Chapter[];
// }[]

export default defineEventHandler(
  async (event): Promise<CourseWithChapter> => {
    const courseId = getRouterParam(event, 'course')
    const chapterId = getRouterParam(event, 'chapter')

    protectRoute(event)

  const isNumeric = (input: string) => /^[+-]?\d+(\.\d+)?$/.test(input)
  if (courseId === undefined || !isNumeric(courseId) || chapterId === undefined || !isNumeric(chapterId)) {
        throw createError({
          statusCode: 404,
          message: 'Lesson not found (1A)',
      })
  }
  const course = await prisma.course.findFirst({
    where: {
      id: parseInt(courseId),
      // chapters: {
      //   every: {
      //     id: parseInt(chapterId)  
      //   }
      // }
    },
    include: {
      chapters: {
        where: {
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

  if (course.chapters.length == 0) {
    throw createError({
      statusCode: 404,
      message: 'Lesson not found (1C)',
  })
  }

  return {
    id: course.id,
    title: course.title,
    description: course.description,
    updatedAt:course.updatedAt,
    createdAt: course.createdAt,
    chapters: course.chapters[0]
  }
});

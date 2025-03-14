export type ChapterIndex = { id: number; title: string; }

export type CourseIndexArray = {
    id: number;
    title: string;
    chapters: ChapterIndex[];
}[]

import { type Course, type Chapter } from '@prisma/client'

export type CourseWithChapter = Course & {
    chapters: Chapter
}
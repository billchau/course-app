import { type News, PrismaClient } from '@prisma/client';

export type NewsArray = {
    id: number;
    title: string;
    highlight: string;
}[]

const prisma = new PrismaClient()

export default defineEventHandler(
  async (): Promise<News[]> => {
    
  // const newsArray = await data.tweets as NewsArray
  return await prisma.news.findMany()
});

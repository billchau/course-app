import data from "~/server/seed/news"

export type NewsArray = {
    id: number;
    title: string;
    highlight: string;
}[]

export default defineEventHandler(
  async (): Promise<NewsArray> => {
  const newsArray = await data.tweets as NewsArray
  return newsArray;
});

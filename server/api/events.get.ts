import { type Events, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default defineEventHandler(
  async (): Promise<Events[]> => {
  // const eventsArray = await data.events as EventsArray
  return await prisma.events.findMany();
});

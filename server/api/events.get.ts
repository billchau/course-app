import data from "~/server/seed/events"

export type EventsArray = {
    id: number;
    image: string;
    image_url: string;
    title: string;
    highlight: string;
    content: string;
}[]

export default defineEventHandler(
  async (): Promise<EventsArray> => {
  const eventsArray = await data.events as EventsArray
  return eventsArray;
});

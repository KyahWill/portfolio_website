import type { RequestEvent } from "@sveltejs/kit";
import type { EngagementSummary } from "../../../types/Engagements";
export const GET = async (event: RequestEvent) => {
  const response = await event.fetch("/engagements.json");
  const engagements  = await response.json();
  const output: EngagementSummary[] = engagements.map((engagement: any) => {
    return {
      title: engagement.title,
      imageLink: engagement.imageLink,
      description: engagement.description,
      dateStart: engagement.dateStart,
      dateEnd: engagement.dateEnd,
    };
  });
  return new Response(JSON.stringify(output));
};

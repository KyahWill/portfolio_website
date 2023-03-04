import type { PageServerLoad } from "./$types";

export const load = (async (event) => {
  const projects = await event.fetch("/api/projects");  
  const output = await projects.json();
  const engagementList = await event.fetch("/api/engagements");
  const engagements = await engagementList.json();
  return {
    props: {
      output,
      engagements,
    },
  };
}) satisfies PageServerLoad;

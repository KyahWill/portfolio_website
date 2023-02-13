import type { PageServerLoad } from './$types';
 
export const load = (async(event) => {
  const response = await event.fetch("/api/projects")
  const output = await response.json()
  
  return {
    props: {
      output
    }
  };
}) satisfies PageServerLoad;
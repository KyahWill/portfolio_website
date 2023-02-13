import type { PageServerLoad } from './$types';
 
export const load = (async(event) => {
  const response = await event.fetch("/api/projects")
  let output = await response.json()
  
  if (output.length > 3) {
    output = output.slice(0,3)
  }
  return {
    props: {
      output
    }
  };
}) satisfies PageServerLoad;
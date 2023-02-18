import type { ProjectSummary } from '../../types/Project';
import type { PageServerLoad } from './$types';
 
export const load = (async(event) => {
  const response = await event.fetch("/api/projects")
  const projects = await response.json()
  const projectSet: Set<string> = new Set(projects.map(
    (project:ProjectSummary)=>{
      return project.tags
    })
    .flat()
  )
  const tagList:string[] = [...projectSet];
  return {
    props: {
      projects:projects,
      tagList:tagList,
    }
  };
}) satisfies PageServerLoad;
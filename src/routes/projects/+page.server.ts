import type { ProjectSummary } from '../../types/Project';
import type { PageServerLoad } from './$types';
 
export const load = (async(event) => {
  const response = await event.fetch("/api/projects")
  const projects = await response.json()
  const projectTags: Set<string> = new Set(projects.map(
    (project:ProjectSummary)=>{
      return project.tags
    })
    .flat()
  )
  const tagList:string[] = [...projectTags];
  return {
    props: {
      projects:projects,
      tagList:tagList,
    }
  };
}) satisfies PageServerLoad;
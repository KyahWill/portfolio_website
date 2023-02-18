import type { ProjectSummary } from '../../types/Project';
import type { PageServerLoad } from './$types';
 
export const load = (async(event) => {
  const response = await event.fetch("/api/projects")
  const projects = await response.json()
  let tagList:string[] = [];
  projects.forEach((project :ProjectSummary) => {
      project.tags.forEach(tag => {
          if (tagList.indexOf(tag) === -1){
              tagList.push(tag)
          }
      })
  })
  return {
    props: {
      projects:projects,
      tagList:tagList,
    }
  };
}) satisfies PageServerLoad;
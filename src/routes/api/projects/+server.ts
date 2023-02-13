import type { RequestEvent } from './$types';
import type {ProjectSummary} from './../../../types/Project'
export const GET = async(event: RequestEvent) => {
  const response = await event.fetch(
		"/projects.json"
	)
	const projects = await response.json()
  const output: ProjectSummary[] = projects.map((project: any) => {
    return {
      title:project.title,
      tags: project.tags,
      imageLink: project.imageLink,
      description: project.description,
      projectLink: project.projectLink
    }
  })
	return new Response(JSON.stringify(output))
}
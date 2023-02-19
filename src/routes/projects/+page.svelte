<script lang="ts">
	import { flip } from 'svelte/animate';
	import PageHeading from './../../lib/PageHeading.svelte';
	import type { ProjectSummary } from './../../types/Project';
    import ProjectCard from './../../lib/ProjectCard.svelte';
    import type { PageData } from './$types';
  import { fade } from 'svelte/transition';
    export let data: PageData;

    const projectsBuffer:ProjectSummary[] = data.props.projects
    let projectList = projectsBuffer    

    const tagBuffer: string[] =data.props.tagList
    let tagList = tagBuffer
    
    let filteredTagList: string[] = []    
    
    const isStringInArray = (string:string, array: string[]) => {
        return array.indexOf(string) !==-1
    }
    
    const doesProjectContainFilteredTags = (project: ProjectSummary, tagList: string[]) => {
        // the logic behind this is that 
         /**
          * The logic behind this is that if
          * the all the filtered flags are 
          * inside the project, then this is true
          * otherwise, this is false
        */
        let output:boolean = tagList.every(
            (tag) => {

                const output = isStringInArray(tag,project.tags)
                console.log(tag, project.tags,output)
                return output
            }
        )
        console.log(project.tags,tagList,output)
        return output
    }
    const isTagsInFiltered = (filteredTag:string, inputTag: string) =>{
        return filteredTag !== inputTag
    }
    const addOrRemoveFilter = (tag: string, operation: string) => {
        let buffer: string[]
        switch(operation){
            case "add":
                buffer = tagBuffer.filter((filteredTag) => {
                    return isTagsInFiltered(filteredTag,tag)
                })

                filteredTagList = [ ...filteredTagList, tag]
                tagList = [...buffer]

                break;
            case "remove":
                buffer = filteredTagList.filter((filteredTag) => {
                    return isTagsInFiltered(filteredTag, tag)
                })
                tagList = [...tagList, tag]
                filteredTagList = [ ...buffer]
            break;
        }
        if (filteredTagList.length > 0) {
            const projectListBuffer = projectsBuffer.filter(
                (project:ProjectSummary) => {
                    return doesProjectContainFilteredTags(project,filteredTagList)
                }
            )
            projectList = [...projectListBuffer]
        } else {
            projectList = [...projectsBuffer]
        }
    }
</script>
<svelte:head>
    <title>Projects</title>
</svelte:head>
<section class="mb-3">
    <PageHeading title="Projects" />
</section>
<section>
    <form class="mx-auto p-3 h-32 justify-center relative z-10 w-2/3 bg-white rounded-lg active:border-lg active:border-primary">
        <div class="w-fit flex">
            <input type="text" class="flex-1 input input-primary mr-5" />
            <select class="flex-0 select select-primary">
                {#each tagList as tag}
                    <option on:click={()=> addOrRemoveFilter(tag,"add")}>{tag}</option>                 
                {/each}
            </select>
        </div>
        <div class="mt-3">
            <p class="text-lg">Tags:</p>
            {#each filteredTagList as tag}
                <div class="badge badge-accent z-10 mx-1">
                    {tag}
                <button class="mx-1" on:click={()=>addOrRemoveFilter(tag,"remove")}>X</button>
                </div>
            {/each}
        </div>
    </form>

    
</section>
<section class="flex flex-row flex-wrap mx-auto align-center justify-center">
{#each projectList as project, i(project.title)}
<div in:fade animate:flip="{{duration: 700}}">
    <ProjectCard project={project} />
</div>
{/each}
</section>
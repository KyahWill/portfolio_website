<script lang="ts">
	import { flip } from 'svelte/animate';
    import { fade } from 'svelte/transition';
	import type { ProjectSummary } from './../../types/Project';
    import type { PageData } from './$types';
    import PageHeading from './../../lib/PageHeading.svelte';
    import ProjectCard from './../../lib/ProjectCard.svelte';

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
        console.log(tag,operation)
        switch(operation){
            case "add":
                buffer = tagList.filter((filteredTag) => {
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
        if (filteredTagList.length == 0) {
            projectList = [...projectsBuffer]
            return
        }
        
        const projectListBuffer = projectsBuffer.filter(
            (project:ProjectSummary) => {
                return doesProjectContainFilteredTags(project,filteredTagList)
            }
        )
        projectList = [...projectListBuffer]
        
    }

</script>
<svelte:head>
    <title>Projects</title>
</svelte:head>
<section class="mb-3">
    <PageHeading title="Projects" />
</section>
<section class="relative z-10">
    <div class="mx-auto p-3 h-32 justify-center  w-2/3 bg-white rounded-lg active:border-lg active:border-primary">
        <div class="w-100 flex">
            <input type="text" class="flex-1 input input-primary mr-5" />
            <div class="dropdown dropdown-end flex-none">
                <label class="btn btn-primary m-1 z-10"> <input type="button" value="Filter"/></label>
                <ul class="dropdown-content menu shadow bg-base-100 rounded-box w-52 ">
                    {#each tagList as tag}
                        <button
                            class="text-lg p-2 hover:text-secondary" 
                            on:click={()=> {
                                addOrRemoveFilter(tag,"add")
                            }}
                        >
                            {tag}
                        </button><!-- -->                
                    {/each}
                </ul>
            </div>
        </div>
        <div class="mt-3">
            <p class="text-lg">Tags:</p>
            {#each filteredTagList as tag}
                <div class="badge badge-accent z-10 mx-1 ">
                    {tag}
                <button class="mx-1" on:click={()=>addOrRemoveFilter(tag,"remove")}>X</button>
                </div>
            {/each}
        </div>
    </div>

    
</section>
<section class="flex flex-row flex-wrap mx-auto align-center justify-center relative z-0">
{#each projectList as project, i(project.title)}

<div in:fade animate:flip="{{duration: 700}}" class="relative z-10">
    <ProjectCard project={project} />
</div>
{/each}
</section>
<script lang="ts">
	import type { ProjectSummary } from './../types/Project';
    export let project: ProjectSummary;
    const projectLink = "/projects/"+project.projectLink

</script>
<div class="card w-96 h-80 bg-base-100 shadow-xl m-2 z-10">
    <figure class="h-28"><img class="h-28" src={project.imageLink} alt={project.title+" Project"} /></figure>
    <div class="card-body">
        <a href={projectLink}>
            <h2 class="card-title text-2xl hover:scale-110 hover:transition-all max-w-fit">
            {project.title}
            
            </h2>
        </a>
        {#if project.isOngoing}
            <div class="badge badge-secondary">ONGOING</div>
        {/if}
        <p class="text-lg">
            {project.description}
        </p>
        <div class="card-actions justify-end">
        {#each project.tags as tag}    
            <div class="badge badge-outline p-2">{tag}</div> 
        {/each}
        </div>
    </div>
</div>
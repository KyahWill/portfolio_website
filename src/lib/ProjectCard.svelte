<script lang="ts">
	import type { ProjectSummary } from './../types/Project';
    export let project: ProjectSummary;
    const projectLink = "/projects/"+project.projectLink

</script>
<div class="card w-96 h-72 bg-base-100 shadow-xl m-2">
    <figure class="h-28"><img class="h-28" src={project.imageLink} alt="Shoes" /></figure>
    <div class="card-body">
        <a href={projectLink}>
            <h2 class="card-title">
            {project.title}
            <!-- <div class="badge badge-secondary">NEW</div> -->
            </h2>
        </a>
        <p>{project.description}</p>
        <div class="card-actions justify-end">
        {#each project.tags as tag}    
            <div class="badge badge-outline">{tag}</div> 
        {/each}
        </div>
    </div>
</div>
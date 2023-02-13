<script lang="ts">
	import type { ProjectSummary } from './../../types/Project';
 	import ProjectCard from './../../lib/ProjectCard.svelte';
     import type { PageData } from './$types';
    export let data: PageData;
    const projects:ProjectSummary[] = data.props.output
</script>
<section class="mb-3">
    <h1 class="text-3xl text-center">
        Projects
    </h1>
</section>
<section class="flex flex-row flex-wrap mx-auto align-center justify-center">
{#each projects as project}
<ProjectCard project={project}/>
{/each}
</section>
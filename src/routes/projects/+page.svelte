<script lang="ts">
	import PageHeading from './../../lib/PageHeading.svelte';
	import type { ProjectSummary } from './../../types/Project';
 	import ProjectCard from './../../lib/ProjectCard.svelte';
     import type { PageData } from './$types';
    export let data: PageData;
    const projects:ProjectSummary[] = data.props.output
</script>
<svelte:head>
    <title>Projects</title>
</svelte:head>
<section class="mb-3">
    <PageHeading title="Projects" />
</section>
<section class="flex flex-row flex-wrap mx-auto align-center justify-center">
{#each projects as project}
<ProjectCard project={project}/>
{/each}
</section>
<script lang="ts">
	import type { ProjectSummary } from './../types/Project';
 	import ProjectCard from './../lib/ProjectCard.svelte';
     import type { PageData } from './$types';
    export let data: PageData;
    const projects:ProjectSummary[] = data.props.output
</script>

<section class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
        <div class="max-w-md">
        <h1 class="text-5xl font-bold">Will Vincent Parrone</h1>
        <p class="py-6">Business Analyst, Rotarian, Something something portfolio</p>
        <button class="btn btn-primary">Contact Me</button>
        </div>
    </div>
</section>

<section class="mb-32 mt-20">
    <h1 class="text-3xl text-center">
        Projects
    </h1>
</section>
<section class="flex flex-row">
    <section class="flex flex-row w-1/2 flex-wrap mx-5 ">
        {#each projects as project}
        <ProjectCard project={project}/>
        {/each}
        </section>
        <section>
            <p>Inserted here are my projects lmao</p>
        </section>
</section>

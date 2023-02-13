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

<section class="mb-10 mt-10">
    <h1 class="text-3xl text-center">
        Projects
    </h1>
</section>
<section class="flex flex-col-reverse md:flex-row items-center md:items-start ">
    <section class="flex flex-col md:flex-row w-2/3 flex-wrap mx-5 ">
        {#each projects as project}
        <ProjectCard project={project}/>
        {/each}
    </section>
    <section class="w-2/3 md:w-1/3 text-justify mb-5 md:mb-0 mx-5">
        <p>I have built an expertise using various languages such as javascript, python, rust, and the likes. Attached within are the original projects that I have worked on or are still currently being worked on.</p>
    </section>
</section>

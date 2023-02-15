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
        <p class="py-6">Business Analyst, Rotarian, Generalist Extraordinaire</p>
        </div>
    </div>
</section>

<section class="mb-10 mt-10 min-h-screen">
    <h1 class="text-3xl text-center ">
        About me
    </h1>
    <section class="w-96 md:w-1/3 text-justify mx-auto mb-5 md:mb-0">
        <p> I actually am not sure what to add in here but I generally have a lot of things that I know off and a lot of things I don't know about..</p>
        <a href="/about">
            <button class="text-secondary ">View more</button>
        </a>
    </section>
</section>
<section class="mb-10 mt-10">
    <h1 class="text-3xl text-center">
        Projects
    </h1>
</section>
<section class="flex flex-col items-center mx-auto">
    <section class=" text-justify mb-5 mx-auto w-96 md:w-5/12 md:mb-0 ">
        <p>I have built an expertise using various languages such as javascript, python, rust, and the likes. Attached within are the original projects that I have worked on or are still currently being worked on.</p>
        <a href="/projects">
            <button class="text-secondary ">View All Projects</button>        </a>
    </section>

    <section class="flex flex-col flex-wrap md:flex-row mx-1 ">
        {#each projects as project}
        <ProjectCard project={project}/>
        {/each}
    </section>
    

</section>
<section>

</section>
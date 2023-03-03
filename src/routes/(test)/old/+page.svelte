<script lang="ts">
  import type { ProjectSummary } from "./../types/Project";
  import ProjectCard from "./../lib/ProjectCard.svelte";
  import type { PageData } from "./$types";
  import PageHeading from "$lib/PageHeading.svelte";
  export let data: PageData;
  const projects: ProjectSummary[] = data.props.output;
  const personalDescription = [
    "FULL STACK DEV",
    "BUSINESS-ANALYST",
    "& TECH LOVER",
  ];
  let forms = {
    name: "",
    email: "",
    message: "",
  };
  const detailedDescription = [
    `I am a jack of all trades
        with experience using various web technologies 
        to provide users with greate user experience.`,
    `I have 2 years worth of experience
        working as a business analyst for Ethos Bytes
        and Halcyon Agile. `,
    `On top of that, I have been
        a leader not only in classroom activities but 
        in other organizations as well`,
  ];
</script>

<svelte:head>
  <title>Will Vincent Parrone</title>
  <meta name="description" content={detailedDescription[0]} />
  <meta
    name="keywords"
    content="Frontend Developer, Business Analyst, Will Vincent Parrone, Software"
  />
  <meta name="author" content="Will Vincent L Parrone" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<section class="hero min-h-screen">
  <div class="hero-content flex-col md:flex-row">
    <div class="w-80 md:w-96 mx-auto p-2 md:mx-0 md:p-0">
      <h1
        class="text-4xl text-white sm:text-7xl justify-center align-center font-bold z-10 "
      >
        WILL VINCENT PARRONE
      </h1>
    </div>
    <div class=" justify-center">
      {#each personalDescription as pd}
        <div class="flex flex-row justify-between">
          {#each pd.split(" ") as word}
            <p class="text-3xl md:text-5xl z-10">
              {word}
            </p>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="mb-10 mt-10 min-h-screen ">
  <PageHeading title="ABOUT ME" />
  <section
    class="relative z-10 w-96 md:w-1/3 text-justify mx-auto mt-3 md:mb-5 flex flex-col md:flex-row justify-evenly"
  >
    <img
      src="/developer_picture.jpg"
      alt="will vincent parrone"
      class="md:h-96 rounded-2xl mt-5"
    />

    <div class="mt-5 md:mx-5 md:mb-5">
      {#each detailedDescription as description}
        <p class="text-lg text-justify w-96">
          {description}
        </p>
        <br />
      {/each}
      <a href="/about">
        <button class=" relative z-10 btn btn-primary p-2 rounded-lg "
          >View more</button
        >
      </a>
    </div>
  </section>
</section>

<section class="min-h-screen observe">
  <section class="mb-10 mt-10 animate">
    <PageHeading title="PROJECTS" />
  </section>
  <section class="flex flex-col items-center mx-auto">
    <section class=" text-justify mb-5 mx-auto w-96 md:w-5/12 md:mb-0 ">
      <p class="relative z-10 text-lg text-justify">
        I have built an expertise using various languages such as javascript,
        python, rust, and the likes. Attached within are the original projects
        that I have worked on or are still currently being worked on.
      </p>
      <p class="relative z-10" />
      <a class="relative z-10" href="/projects">
        <button class="btn btn-primary p-2 mt-1 rounded-lg">
          View All Projects
        </button>
      </a>
    </section>

    <section class="flex flex-col flex-wrap md:flex-row mx-1 mt-8">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </section>
  </section>
</section>

<section>
  <form class="relative z-10 p-4 min-h-screen hero">
    <div class="hero-content flex-col">
      <div class="card relative z-10 bg-white p-6 shadow-lg">
        <PageHeading title="Wanna Collaborate?" />
        <p class="my-4 text-lg font-semibold">
          Name:
          <input
            type="text"
            class="border rounded-xl p-2 w-full"
            bind:value={forms.name}
          />
          <br />
          Email:
          <input
            type="text"
            class="border rounded-xl p-2 w-full"
            bind:value={forms.email}
          />
          <br />
          Message
          <br />
          <textarea
            class="p-2  border rounded-xl w-full"
            bind:value={forms.message}
          />
        </p>
        <button type="submit" class="btn btn-primary"> Contact Me</button>
      </div>
    </div>
  </form>
</section>

<style>
</style>

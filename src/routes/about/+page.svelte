<script lang="ts">
  import PageHeading from "./../../lib/PageHeading.svelte";
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
  <title>About Me: Will Vincent Parrone</title>
</svelte:head>
<PageHeading title="About Me" />
<section class="mb-10 mt-10 min-h-screen ">

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
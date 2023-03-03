<script lang="ts">
  import type { Blog } from "../../types/Blog";

  import PageHeading from "./../../lib/PageHeading.svelte";

  const blogList: Blog[] = [
    {
      title: "Why do this things happen to me?",
      description: "I kinda did deserve it ya know",
      link: "/1",
    },
  ];
</script>

<svelte:head>
  <title>Blogs</title>
  <meta name="description" content="Thoughts and opinions made by Wil Vincent Parrone">
  <meta name="keywords" content="Frontend Developer, Business Analyst, Will Vincent Parrone, Software Blogs, Blogs">
  <meta name="author" content="Will Vincent L Parrone">
  
</svelte:head>
<PageHeading title="Blogs" />
<section class="mx-auto mt-6">
  {#each blogList as blog}
    <div
      class="card card-normal md:w-7/12 mx-auto shadow-md bg-white relative z-10 p-4"
    >
      <a href={"/blogs" + blog.link} class="text-2xl card-title">{blog.title}</a
      >
      <p class="text-lg">{blog.description}</p>
    </div>
  {/each}
</section>

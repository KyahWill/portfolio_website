<script lang="ts">
    const sublinks = [
        {
          title:"About",
          link:"/about",
        },
        {
          title:"Blogs",
          link:"/blogs",
        },
        {
          title:"Contact Me",
          link:"/contact",
        },
        {
          title:"Projects",
          link:"/projects",
        },
    ]
</script>

<div class="navbar bg-base-100 px-12 shadow-gray-200 shadow-md " >
    <div class="font-semibold text-2xl flex-1 z-10">
        <a href="/"> Home </a>
    </div>
    {#each sublinks as link}
    <div class="font-semibold text-2xl flex-none mx-4 z-10">
        <a href={link.link}>{link.title}</a>
    </div>
    {/each}
</div>
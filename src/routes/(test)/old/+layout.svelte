<script lang="ts">
  import NavMenu from "./../lib/NavMenu.svelte";
  import "../app.css";
  import Transition from "$lib/Transition.svelte";
  import { page } from "$app/stores";
  import Footer from "$lib/Footer.svelte";
  const sublinks = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
    {
      title: "Projects",
      link: "/projects",
    },
  ];
  let m = { x: 0, y: 0 };
  let element: HTMLDivElement;
  function handleMousemove(event: MouseEvent) {
    m.x = event.clientX;
    m.y = event.clientY;
    element?.animate(
      {
        left: m.x + "px",
        top: m.y + "px",
      },
      { duration: 1500, fill: "forwards" }
    );
  }
</script>

<div class="drawer drawer-end">
  <input id="custom-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <div on:mousemove={handleMousemove}>
      <div class="pointer" bind:this={element} />
      <NavMenu />
      <Transition url={$page.url}>
        <div class="min-h-screen">
          <slot />
        </div>
      </Transition>
      <Footer />
    </div>
  </div>
  <div class="drawer-side">
    <label for="custom-drawer" class="drawer-overlay" />
    <ul class="menu-menu-compact bg-white w-3/5 flex flex-col py-4">
      {#each sublinks as link}
        <a
          on:click={() => {
            document.getElementById("custom-drawer")?.click();
          }}
          href={link.link}
        >
          <li
            class="text-2xl px-4  font-semibold py-4 hover:bg-primary hover:text-white transition-all duration-300"
          >
            {link.title}
          </li>
        </a>
      {/each}
    </ul>
  </div>
</div>

<style>
  @keyframes rotate {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
  .pointer {
    height: 400px;
    width: 480px;
    border: 1px;
    background: linear-gradient(
      90deg,
      rgba(221, 255, 216, 1) 0%,
      rgba(252, 239, 196, 1) 57%,
      rgba(255, 250, 186, 1) 100%
    );
    mix-blend-mode: difference;
    animation: rotate 3s linear infinite;
    filter: blur(100px);
    position: fixed;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    z-index: 20;
    pointer-events: none;
  }
</style>

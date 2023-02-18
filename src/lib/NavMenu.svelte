<script>
	import { fly, fade } from 'svelte/transition';
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
  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

  <div class="">
  <div>
    <nav
      class="
            bg-white
            px-12 py-8
            w-screen
            md:flex 
            md:justify-between 
            md:items-center 
            shadow-lg
            relative 
            z-10
            bg-opacity-70
            "
    
      >
      <div class="flex items-center justify-between">
        <div class=" hover:scale-110 hover:transition-all font-semibold text-2xl  z-10 ">
            
          <a href="/" class=""> Home </a>
        </div>
        <!-- Mobile menu button -->
        <label for="custom-drawer" class="flex md:hidden z-10 drawer-button">
          <div
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </label>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      
      <div
        class="ease-in-out flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
          ? 'flex transition'
          : 'hidden'}"
      >
        {#each sublinks as link}
        <div class="font-medium text-2xl flex-none mx-4 z-10 hover:scale-110 hover:transition-all w-fit">
            <a href={link.link}>{link.title}</a>
        </div>
        {/each}
      </div>
    </nav>
  </div>
  </div>
  

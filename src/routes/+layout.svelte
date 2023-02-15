<script lang="ts">
	import NavMenu from './../lib/NavMenu.svelte';
  import "../app.css"
  import Transition from '$lib/Transition.svelte';
  import {page} from '$app/stores'
  import Footer from '$lib/Footer.svelte';
  
</script>
<NavMenu />

<Transition url={$page.url}>
  <div class="min-h-screen">
    <slot />
  </div>
</Transition>

<Footer />

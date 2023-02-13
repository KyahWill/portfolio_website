<script lang="ts">
	import NavMenu from './../lib/NavMenu.svelte';
  import "../app.css"
  import Transition from '$lib/Transition.svelte';
  import {page} from '$app/stores'
  
</script>
<NavMenu />

<Transition url={$page.url}>
  <slot />
</Transition>


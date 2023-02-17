<script lang="ts">
	import NavMenu from './../lib/NavMenu.svelte';
  import "../app.css"
  import Transition from '$lib/Transition.svelte';
  import {page} from '$app/stores'
  import Footer from '$lib/Footer.svelte';

	let m = { x: 0, y: 0 };
  let element:HTMLDivElement;
	function handleMousemove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
    element?.animate({
      left: m.x+'px',
      top: m.y+'px',
    }, {duration:2000, fill:'forwards'})
    
	}
</script>

<div on:mousemove={handleMousemove}>
  <div 
    class="pointer"
    bind:this={element}
  >
  </div>
  <NavMenu />

  <Transition url={$page.url}>
    <div class="min-h-screen">
      <slot />
    </div>
  </Transition>

  <Footer />

</div>
<style>
  @keyframes rotate{
    from{
      rotate:0deg;
    }
    to{
      rotate:360deg;
    }
  }
.pointer{
  height: 400px; 
  width:500px; 
  background:linear-gradient(
    90deg, 
    rgba(100,207,54,1) 0%,
    rgba(84,245,85,1) 57%, 
    rgba(0,247,255,1) 100%);


  animation:rotate 20s infinite;
  filter:blur(200px);
  position:fixed;
  border-radius: 50%;
  left:50%;
  top:50%;
  translate: -50% -50%;
  z-index: 5;
}
</style>
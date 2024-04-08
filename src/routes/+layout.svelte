<script lang="ts">
     import "../app.css"; 
</script>
<div class="mx-5 md:mx-60">
    <div class="hidden md:flex navbar static top-0 items-center">
	<div class="navbar-start">
	</div>
	<div class="hidden md:flex md:flex-row md:mt-5 navbar-end gap-8 text-3xl font-semibold">
	    <a class="link-hover" href="#experience">
		<p> Experience </p>
	    </a>
	    <a class="link-hover" href="#projects">
		<p> Projects </p>
	    </a>
	    <a class="link-hover" href="#contact">
		<p> Contact Me </p>
	    </a>
	</div>
    </div>
    <slot />
</div>
<footer class="footer footer-center p-4 bg-base-300 text-base-content mt-60">
  <aside>
    <p>Copyright © 2024 - All right reserved by Will Vincent L. Parrone</p>
  </aside>
</footer>

<script lang="ts">
    import { fly } from "svelte/transition";
    export let url: URL;
</script>

{#key url}
    <div in:fly={{  x:-50, duration: 250, delay: 300}}>
        <slot />
    </div>
{/key}
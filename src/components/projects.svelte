<script>
    import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

    let katazuke = "/images/katazuke.jpeg";
    let ready = false;

    onMount(() => ready = true);
</script>

<div class="always-visible">

    {#if ready}

        <p transition:fly={{ y: 200, duration: 2000 }}>
            This is my last personal game: Katazuke
        </p>

        <div transition:fade>
            <img src={katazuke} alt="Screenshot of game Katazuke">
        </div>

    {/if}

</div>
<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let katazuke = '/images/katazuke.jpeg';
	let ready = false;

	onMount(() => (ready = true));
</script>

<div id="personal-projects" class="always-visible px-5 py-3 lg:px-8">
	<h1>Personal Projects</h1>

	{#if ready}
		<p transition:fly={{ y: 200, duration: 2000 }}>This is my latest personal game: Katazuke</p>

		<div transition:fade>
			<img src={katazuke} alt="Screenshot of game Katazuke" />
		</div>
	{/if}
</div>

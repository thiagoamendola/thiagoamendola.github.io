<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let katazuke = '/images/katazuke.jpeg';
	let godotlut = '/images/lut_title.png';
	let ready = false;

	onMount(() => (ready = true));
</script>

<div id="personal-projects" class="always-visible px-5 py-3 pb-8 lg:px-8 bg-[#d3dded]">
	<h1 class="mb-3">Personal Projects</h1>

	<!-- CREATE CARD COMPONENT OUT OF THESE -->

	{#if ready}
		<div transition:fly={{ x: -200, duration: 2000 }} class="pl-2 pt-2">
			<p class="text-2xl">Katazuke</p>
			<p class="text-lg">Party game inspired by “Overcooked” and Marie Kondo</p>
			<ul class="list-disc pl-6 pt-2">
				<li>Implemented competitive party game in Unity.</li>
				<li>
					Created dynamic loading system that uses single game environment with multiple game scenes
					seamlessly.
				</li>
			</ul>

			<div transition:fade={{ delay: 500, duration: 1000 }} class="py-3">
				<img
					src={katazuke}
					class="object-cover h-48 rounded-lg"
					alt="Screenshot of game Katazuke, with 2 doll-like characters battling in a bedroom"
				/>
			</div>
		</div>
		<div transition:fly={{ x: -200, duration: 2000 }} class="pl-2 pt-2">
			<p class="text-2xl">Godot Color LUT Shader</p>
			<p class="text-lg">Godot Shader for cheap design-oriented screen effects</p>
			<ul class="list-disc pl-6 pt-2">
				<li>
					Created an open-source, low-computing shader that allows changing rendered content’s color
					palette by providing a designer-created Look-Up Table textures.
				</li>
			</ul>

			<div transition:fade={{ delay: 500, duration: 1000 }} class="py-3">
				<img
					src={godotlut}
					class="object-cover h-48 rounded-lg"
					alt="Screenshot of Godot LUT Shader project, with a screenshot of a game scene showcasing different screen filters"
				/>
			</div>
		</div>
	{/if}
</div>

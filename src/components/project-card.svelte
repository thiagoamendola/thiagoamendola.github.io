<script>
	import { fly, fade, slide, scale } from 'svelte/transition';
	import { Gamepad2, Github, Shapes } from 'lucide-svelte'; // or your icons
	export let title;
	export let description;
	export let features = [];
	export let image;
	export let altText = '';
	export let links = {};
</script>

<!-- Decrease width of entire div. Dead space should be on the side -->
		
<div
	in:fly={{ x: -200, duration: 600 }}
	class="relative p-8 bg-gradient-to-br from-[#f5f0fa] to-[#e7e0f5] rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto my-8 max-w-xl md:max-w-6xl"
> 
	<!-- Text Column -->
	<div class="flex flex-col">
		<p in:slide={{ y: -20, duration: 400 }} class="text-3xl text-gray-800">
			{title}
		</p>
		<p in:fade={{ delay: 200, duration: 600 }} class="mt-1 text-lg text-gray-700">
			{description}
		</p>

		<div class="mt-4 flex-1 p-4 pr-10 rounded-lg">
			<ul class="list-disc pl-5 space-y-2 text-gray-700">
				{#each features as feat, i}
					<li in:slide={{ x: -50, delay: 300 + i * 150, duration: 500 }}>
						{feat}
					</li>
				{/each}
			</ul>
		</div>

		<div class="mt-4 flex flex-wrap gap-3">
            {#if links.itchio}
                <a
                href={links.itchio}
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-rose-500 text-white font-medium rounded-lg shadow hover:bg-rose-800 transform hover:scale-105 transition"
                >
                <Gamepad2 class="w-5 h-5 mr-2" />
                itch.io
                </a>
            {/if}
            {#if links.github}
                <a
                href={links.github}
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-black transform hover:scale-105 transition"
                >
                <Github class="w-5 h-5 mr-2" />
                GitHub
                </a>
            {/if}
            {#if links.openprocessing}
                <a
                href={links.openprocessing}
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-slate-600 text-white font-medium rounded-lg shadow hover:bg-slate-800 transform hover:scale-105 transition"
                >
                <Shapes class="w-5 h-5 mr-2" />
                Open Processing 
                </a>
            {/if}
		</div>
	</div>

	<!-- Image Column -->
	<div class="flex w-full justify-end items-center mr-8 mt-4 mb-4">
		<img
			in:fade={{ delay: 600, duration: 800 }}
			src={image}
			alt={altText}
			class="h-auto rounded-xl w-full max-w-[600px] md:max-w-[720px]"
		/>
	</div>
</div>

<!-- REFACTOR THE FOLLOWING -->
<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(15px) rotate(30deg);
		}
	}
</style>

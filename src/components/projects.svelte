<script>
	import { onMount } from 'svelte';
	import { fade, fly, slide, scale } from 'svelte/transition';
	import { Github, ExternalLink, Gamepad, PlayCircle } from 'lucide-svelte';

	let katazuke = '/images/katazuke.jpeg';
	let godotlut = '/images/lut_title.png';
	let ready = false;

	onMount(() => (ready = true));

	// REFACTOR THIS VVVVVVVVVVVVVV
	// your feature list
	const features = [
		'Implemented competitive party game in Unity.',
		'Created dynamic loading system that uses single game environment with multiple game scenes seamlessly.'
	];
</script>

<div id="personal-projects" class="always-visible px-5 py-3 pb-8 lg:px-8 bg-[#d3dded]">
	<h1 class="text-center mt-4">Personal Projects</h1>

	<!-- CREATE CARD COMPONENT OUT OF THESE -->

	{#if ready}
		<div
			in:fly={{ x: -200, duration: 600 }}
			class="relative p-6 bg-gradient-to-br from-[#f5f0fa] to-[#e7e0f5] rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 md:mx-16 my-8"
			>
			<!-- optional accent circle -->
			<div class="accent"></div>

			<!-- text column (flex to allow stretching) -->
			<div class="flex flex-col">
				<p in:slide={{ y: -20, duration: 400 }} class="text-3xl text-gray-800">
					Katazuke
				</p>
				<p in:fade={{ delay: 200, duration: 600 }} class="mt-1 text-lg text-gray-700">
					Party game inspired by “Overcooked” and Marie Kondo
				</p>

				<!-- description cell (flex-1 to fill available height) -->
				<div class="mt-4 flex-1 p-4 rounded-lg">
					<ul class="list-disc pl-5 space-y-2 text-gray-700">
						{#each features as feat, i}
							<li in:slide={{ x: -50, delay: 300 + i * 150, duration: 500 }}>
								{feat}
							</li>
						{/each}
					</ul>
				</div>

				<!-- Links cell at bottom -->
				<!-- I might want this BEFORE image in Desktop and AFTER image in Mobile -->
				<div class="mt-4 flex flex-wrap gap-3">
					<a
					  href="https://itch.io/your-game"
					  target="_blank"
					  class="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-medium rounded-lg shadow hover:bg-orange-400 transform hover:scale-105 transition"
					>
					  <ExternalLink class="w-5 h-5 mr-2" />
					  itch.io
					</a>
					<a
					  href="https://github.com/your-repo"
					  target="_blank"
					  class="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-gray-700 transform hover:scale-105 transition"
					>
					  <Github class="w-5 h-5 mr-2" />
					  GitHub
					</a>
					<a
					  href="https://newgrounds.com/your-game"
					  target="_blank"
					  class="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-500 transform hover:scale-105 transition"
					>
					  <Gamepad class="w-5 h-5 mr-2" />
					  Newgrounds
					</a>
					<a
					  href="https://your-game-demo.com"
					  target="_blank"
					  class="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-500 transform hover:scale-105 transition"
					>
					  <PlayCircle class="w-5 h-5 mr-2" />
					  Live Demo
					</a>
				  </div>
			</div>

			<!-- image column (cropped on right) -->
			<div class="flex justify-end items-center mr-8 mt-4 mb-4">
				<img
				  in:scale={{ delay: 600, duration: 800 }}
				  src={katazuke}
				  alt="Screenshot of game Katazuke, with 2 doll-like characters battling in a bedroom"
    			  class="h-auto rounded-xl w-full max-w-[600px] md:max-w-[720px]"
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

<!-- REFACTOR THE FOLLOWING -->
<style>
	/* subtle floating accent for depth */
	.accent {
		position: absolute;
		width: 180px;
		height: 180px;
		background: rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		top: -40px;
		right: -40px;
		filter: blur(40px);
		animation: float 8s ease-in-out infinite;
	}
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

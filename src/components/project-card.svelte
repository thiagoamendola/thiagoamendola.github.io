<script>
	import { fly, fade, slide, scale } from 'svelte/transition';
	import { Gamepad2, Github, Shapes } from 'lucide-svelte'; // or your icons
	export let title;
	export let description;
	export let features = [];
	export let image;
	export let staticImage = false;
	export let video;
	export let altText = '';
	export let links = {};
</script>

<!-- Decrease width of entire div. Dead space should be on the side -->
		
<div
	in:fly={{ x: -200, duration: 600 }}
	class="relative bg-project-card-bg rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-0 mx-auto my-8 max-w-xl md:max-w-6xl overflow-hidden z-0"
> 
	<!-- Text Column -->
	<div class="flex flex-col p-8 z-10">
		<p in:slide={{ y: -20, duration: 400 }} class="text-3xl text-project-title">
			{title}
		</p>
		<p in:fade={{ delay: 200, duration: 600 }} class="mt-1 text-lg text-project-description">
			{description}
		</p>
		<div class="mt-4 flex-1 p-4 pr-10 rounded-lg">
			<ul class="list-disc pl-5 space-y-2 text-project-feature">
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
				class="inline-flex items-center px-4 py-2 bg-project-itchio-bg text-white font-medium rounded-lg shadow hover:bg-project-itchio-hover transform hover:scale-105 transition"
                >
                <Gamepad2 class="w-5 h-5 mr-2" />
                itch.io
                </a>
            {/if}
            {#if links.github}
                <a
                href={links.github}
                target="_blank"
				class="inline-flex items-center px-4 py-2 bg-project-github-bg text-white font-medium rounded-lg shadow hover:bg-project-github-hover transform hover:scale-105 transition"
                >
                <Github class="w-5 h-5 mr-2" />
                GitHub
                </a>
            {/if}
            {#if links.openprocessing}
                <a
                href={links.openprocessing}
                target="_blank"
				class="inline-flex items-center px-4 py-2 bg-project-openprocessing-bg text-white font-medium rounded-lg shadow hover:bg-project-openprocessing-hover transform hover:scale-105 transition"
                >
                <Shapes class="w-5 h-5 mr-2" />
                Open Processing 
                </a>
            {/if}
		</div>
	</div>

	   <!-- Image absolutely positioned on right half -->
   {#if video}
	  <div class="hidden md:block absolute top-0 right-0 bottom-0 h-full w-1/2 overflow-hidden rounded-r-2xl z-0 flex items-center justify-center bg-black">
		<video
		  src={video}
		  autoplay
		  loop
		  muted
		  playsinline
		  class="w-full h-full object-cover absolute top-0 left-0 rounded-r-2xl"
		></video>
	  </div>
   {:else if staticImage}
	  <div class="hidden md:block absolute top-0 right-0 bottom-0 h-full w-1/2 overflow-hidden rounded-r-2xl z-0">
		  <img
			  src={image}
			  alt={altText}
			  class="w-full h-full object-cover absolute top-0 left-0"
		  />
		  <img
			  src={image}
			  alt={altText}
			  class="w-full h-full object-cover absolute top-0 left-0 zoom-in"
		  />
	  </div>
   {:else}
	  <div class="hidden md:block absolute top-0 right-0 bottom-0 h-full w-1/2 overflow-hidden rounded-r-2xl z-0">
		  <img
			  in:fade={{ delay: 600, duration: 800 }}
			  src={image}
			  alt={altText}
			  class="w-full h-full object-cover absolute top-0 left-0"
		  />
	  </div>
   {/if}
	   <!-- For mobile, show image below text -->
   {#if video}
	  <div class="block md:hidden w-full h-64 overflow-hidden rounded-b-xl z-0 relative flex items-center justify-center bg-black">
		<video
		  src={video}
		  autoplay
		  loop
		  muted
		  playsinline
		  class="w-full h-full object-cover absolute top-0 left-0 rounded-b-xl"
		></video>
	  </div>
   {:else if staticImage}
	  <div class="block md:hidden w-full h-64 overflow-hidden rounded-b-xl z-0 relative">
		  <img
			  src={image}
			  alt={altText}
			  class="w-full h-full object-cover absolute top-0 left-0"
		  />
		  <img
			  src={image}
			  alt={altText}
			  class="w-full h-full object-cover absolute top-0 left-0 zoom-in"
		  />
	  </div>
   {:else}
	  <div class="block md:hidden w-full h-64 overflow-hidden rounded-b-xl z-0 relative">
		  <img
			  in:fade={{ delay: 600, duration: 800 }}
			  src={image}
			  alt={altText}
			  class="w-full h-full object-cover absolute top-0 left-0"
		  />
	  </div>
   {/if}
</div>

<!-- REFACTOR THE FOLLOWING -->
<style>
   @keyframes zoomFadeLoop {
	   0% {
		   transform: scale(1);
		   opacity: 1;
	   }
	   70% {
		   transform: scale(1.15);
		   opacity: 1;
	   }
	   90% {
		   transform: scale(1.15);
		   opacity: 0;
	   }
	   99% {
		   transform: scale(1);
		   opacity: 0;
	   }
	   100% {
		   transform: scale(1);
		   opacity: 1;
	   }
   }
   .zoom-in {
	   animation: zoomFadeLoop 5s ease-in-out infinite;
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

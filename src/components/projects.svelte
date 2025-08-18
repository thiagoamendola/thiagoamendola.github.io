<script>
	import ProjectCard from './project-card.svelte';
	import { onMount } from 'svelte';
	import { fade, fly, slide, scale } from 'svelte/transition';

	let ready = false;

	onMount(() => (ready = true));

	const katazukeProject = {
		title: 'Katazuke',
		description: 'Party game inspired by “Overcooked” and Marie Kondo in Unity',
		features: [
			'Implemented Gameplay, UI, Controller support and Tutorial systems.',
			'Created dynamic loading system that uses single game environment with multiple game scenes seamlessly.'
		],
		image: '/images/katazuke.jpeg',
		staticImage: true,
		altText: 'Screenshot of game Katazuke, showing two Matryoshka-like dolls having a discussion in a cardboard bedroom',
		links: {
			itchio: 'https://ticolol.itch.io/katazuke',
			github: 'https://github.com/thiagoamendola/katazuke',
		}
	};

	const godotLutProject = {
		title: 'Godot Color LUT Shader',
		description: 'Godot Shader for cheap design-oriented screen effects',
		features: [
			'Created an open-source, low-computing shader that allows changing rendered content’s color palette by providing a designer-created Look-Up Table textures.',
			'Implemented an interactive graphical representation of RGB Cube discretization process as a proof-of-concept.',
		],
		image: '/images/lut_title.png',
		staticImage: true,
		altText: 'Screenshot of Godot LUT Shader project, with a screenshot of a game scene showcasing different screen filters.',
		links: {
			github: 'https://github.com/thiagoamendola/godot-color-lut-shader',
			openprocessing: 'https://openprocessing.org/sketch/744896',
		}
	};
</script>

<div id="personal-projects" class="always-visible px-5 lg:px-8 py-3 pb-8 bg-projects-bg">
	<h1 class="text-center">Personal Projects</h1>

	{#if ready}
		
	<ProjectCard {...katazukeProject} />
	<ProjectCard {...godotLutProject} />

	{/if}
</div>

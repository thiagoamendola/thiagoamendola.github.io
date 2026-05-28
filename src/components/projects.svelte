<script>
	import ProjectCard from './project-card.svelte';
	import { onMount } from 'svelte';
	import { fade, fly, slide, scale } from 'svelte/transition';

	let ready = false;

	onMount(() => (ready = true));

	const katazukeProject = {
		title: 'Katazuke',
		tag: 'Personal',
		description: 'Party game inspired by “Overcooked” and Konmari in Unity',
		features: [
			'Implemented Gameplay, UI, Controller support and Tutorial systems.',
			'Created dynamic loading system that uses single game environment with multiple game scenes seamlessly.'
		],
		image: '/images/katazuke.jpeg',
		video: '/videos/katazuke.mp4',
		altText: 'Media of game Katazuke, showing two Matryoshka-like dolls having a discussion in a cardboard bedroom',
		links: {
			itchio: 'https://ticolol.itch.io/katazuke',
			github: 'https://github.com/thiagoamendola/katazuke',
		}
	};

	const luarAssaultProject = {
		title: 'Luar Assault',
		tag: 'Personal',
		description: 'Star Fox like 3D space shooter for GBA using C++',
		features: [
			"Used Butano engine to create a Game Boy Advance game, extending the engine's 3D rendering capabilities.",
			'Implemented gameplay, UI, engine optimizations and multiple tools for asset importing.',
		],
		image: '/images/luar-assault-3.png',
		video: '/videos/luar-assault-v0.6.mp4',
		altText: 'Media of game Luar Assault, showing a low-poly spaceship flying and destroying asteroids in a 3D space shooter game',
		links: {
			itchio: 'https://ticolol.itch.io/luar-assault',
			github: 'https://github.com/thiagoamendola/luar-assault',
		}
	};

	const monsterMashProject = {
		title: 'Monster Mash',
		tag: 'Javary Co.',
		description: 'Mobile physics-based puzzle game in Godot',
		features: [
			'Implemented multiple features ranging gameplay, UI, core Loop elements, monetization and optimization.',
			'Worked with Procedural Generation: parametrized illustrations for mobile devices, and dynamic difficulty gradation system for game levels.'
		],
		video: '/videos/monster-mash.mp4',
		altText: 'Media of game Monster Mash, showing colorful, sphere-shaped monsters being fused and popped like balloons.',
		links: {
			instagram: 'https://www.instagram.com/javarystudios/',
		}
	};

	const godotLutProject = {
		title: 'Godot Color LUT Shader',
		tag: 'Personal',
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

<div id="personal-projects" class="always-visible px-5 lg:px-8 py-6 bg-projects-bg">
	<h1 class="text-center">Projects</h1>

	{#if ready}
		
	<ProjectCard {...luarAssaultProject} />
	<ProjectCard {...katazukeProject} />
	<ProjectCard {...monsterMashProject} />
	<ProjectCard {...godotLutProject} />

	{/if}
</div>

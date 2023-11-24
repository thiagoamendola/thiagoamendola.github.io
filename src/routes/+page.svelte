<script lang="ts">
	import Navbar from '../components/navbar.svelte';
	import Intro from '../components/intro.svelte';
	import Projects from '../components/projects.svelte';
</script>

<div class="relative">
	<div class="pb-20">
		<Navbar />
	</div>

	<div class="wrapper-content">
		<Intro />
	</div>

	<div class="wrapper-content">
		<Projects />
	</div>
</div>

<style>
</style>

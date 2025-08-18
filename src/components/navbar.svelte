<script>
	import { fly } from 'svelte/transition';

	let isMenuOpen = false;

	const handleMenuButtonClick = () => {
		isMenuOpen = !isMenuOpen;
	};

	const handleMenuFocusLoss = ({ relatedTarget, currentTarget }) => {
		// use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return; // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null)
		isMenuOpen = false;
	};
</script>

<div class="fixed z-10 w-full">
	<nav class="flex items-center justify-between flex-wrap bg-navbar-bg p-6">
		<div class="flex items-center flex-shrink-0 text-navbar-text mr-6">
			<h1 class="font-semibold tracking-tight"><a href="/">Thiago Amendola</a></h1>
		</div>
		<div class="block lg:hidden">
			<button
				class="flex items-center px-3 py-2 {isMenuOpen
					? ''
					: 'border'} rounded text-navbar-text border-navbar-border hover:text-navbar-hover-text hover:border-navbar-hover-border"
				on:click={handleMenuButtonClick}
			>
				{#if !isMenuOpen}
				<svg class="fill-current h-4 w-4 text-navbar-text" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
						><title>Menu</title><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
						/></svg
					>
				{:else}
							<svg
								class="fill-current h-6 w-6 stroke-current text-navbar-text -mt-2"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<title>Close</title>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{/if}
			</button>
		</div>
		{#key isMenuOpen}
					<div
						class="w-full block flex-grow {isMenuOpen
							? ''
							: 'hidden'} lg:flex lg:items-center lg:w-auto"
						on:focusout={handleMenuFocusLoss}
						in:fly={{ x: -200, duration: 500 }}
					>
						<div class="text-sm lg:flex-grow lg:flex lg:justify-end">
							<a
								href="#personal-projects"
								class="block mt-4 lg:inline-block lg:mt-0 text-navbar-text hover:text-navbar-hover-text mr-4"
								on:click={handleMenuButtonClick}
							>
								Personal Projects
							</a>
							<a
								href="#contact"
								class="block mt-4 lg:inline-block lg:mt-0 text-navbar-text hover:text-navbar-hover-text mr-4"
								on:click={handleMenuButtonClick}
							>
								Contact
							</a>
						</div>
					</div>
		{/key}
	</nav>
</div>

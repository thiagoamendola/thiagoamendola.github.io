<script>
  export let video;
  export let image;
  export let staticImage = false;
  export let altText = '';
  export let containerClass = '';
  let imageClass = 'w-full h-full object-cover absolute top-0 left-0';
</script>

{#if video}
  <div class="{containerClass} {video ? 'flex items-center justify-center bg-black' : ''}">
    <video
      src={video}
      poster={image}
      autoplay
      loop
      muted
      playsinline
      class='w-full h-full object-cover absolute top-0 left-0 '
    ></video>
    <p class="sr-only">{altText}</p>
  </div>
{:else if staticImage}
  <div class="{containerClass}">
    <img src={image} alt={altText} class={imageClass} />
    <img src={image} alt={altText} class="{imageClass} zoom-in" />
  </div>
{:else}
  <div class="{containerClass}">
    <img
      in:fade={{ delay: 600, duration: 800 }}
      src={image}
      alt={altText}
      class={imageClass}
    />
  </div>
{/if}

<style>
  .zoom-in {
    animation: zoomFadeLoop 5s ease-in-out infinite;
  }
  @keyframes zoomFadeLoop {
    0% { transform: scale(1); opacity: 1; }
    70% { transform: scale(1.15); opacity: 1; }
    90% { transform: scale(1.15); opacity: 0; }
    99% { transform: scale(1); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
</style>

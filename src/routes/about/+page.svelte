<script>
	import { IN, OUT } from '$lib/utils/transitions'
	import { fade, fly } from 'svelte/transition'
</script>

<br-md />

<center in:fly|global={{ ...IN, y: 5 }} out:fade={OUT}>
	<a href="https://github.com/braebo/sveltekit-starter">about</a>
</center>

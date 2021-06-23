<script>
	import Scroller from "./Utils/Scroller.svelte";
	import Grid from "./Components/Grid.svelte";

	export let scroller;
	let index, offset, progress;
	//education: tifingah, manchu, rajna,
	//print western-cham, mandaic
	//broadcast TV: CAS, ol chiki, yi
	//hover over each to learn about what we do know about them
	const steps = [
		{
			education: false,
			print: false,
			broadcast: false,
			signage: false,
		},
		{
			signage: true,
			education: false,
			print: false,
			broadcast: false,
		},
		{
			signage: true,
			education: true,
			print: false,
			broadcast: false,
		},
		{
			signage: true,
			education: true,
			print: true,
			broadcast: false,
		},
		{
			signage: true,
			education: true,
			print: true,
			broadcast: true,
		},
	];

	$: props = steps[index];
</script>

<div class="wrapper">
	<header />
	<Scroller
		top={0.2}
		bottom={0.8}
		bind:this={scroller}
		bind:index
		bind:offset
		bind:progress
	>
		<div class="background" slot="background">
			<Grid {...props} />
			<p>
				This is the background content. It will stay fixed in place while the
				foreground scrolls over the top.
			</p>
			<p>Section {index + 1} is currently active.</p>
		</div>
		<div class="foreground" slot="foreground">
			{#each steps as step, i}
				<section>
					{i}
				</section>
			{/each}
		</div>
	</Scroller>
</div>

<style>
	section {
		height: 80vh;
	}
	.background,
	.foreground {
		text-align: center;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>

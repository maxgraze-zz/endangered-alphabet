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
		{
			signage: true,
			education: true,
			print: true,
			broadcast: true,
		},
		{
			signage: false,
			education: false,
			print: false,
			broadcast: false,
		},
	];
	$: props = steps[index];
</script>

<div class="wrapper">
	<h1>Signs of Life</h1>
	<Scroller
		top={0.2}
		bottom={0.8}
		bind:this={scroller}
		bind:index
		bind:offset
		bind:progress
	>
		<div class="background" slot="background">
			<Grid visibleCategories={steps[index]} />
			<p>
				This is the background content. It will stay fixed in place while the
				foreground scrolls over the top.
			</p>
			<p>Section {index + 1} is currently active.</p>
		</div>
		<div class="foreground" slot="foreground">
			<!-- {#each steps as step, i}
				<section>
					{i}
					{step}
				</section>
			{/each} -->
			<section>section 1</section>
			<section>section 2</section>
			<section>section 3</section>
			<section>section 4</section>
			<section>section 5</section>
			<section>
				But with our collaborators, and our friends, we can fill these in.
			</section>
			<section />
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

	.rect {
		background-color: antiquewhite;
		/* width: 50%;
		height: 50%; */
	}
</style>

<script>
	import Scroller from "./utils/Scroller.svelte";
	import Grid from "./components/Grid.svelte";
	import { fade } from "svelte/transition";
	import Matrix from "./components/Matrix.svelte";

	export let scroller;
	let index, offset, progress;
	let visible = false;
	setTimeout(() => (visible = true), 1000);
	//education: tifingah, manchu, rajna,
	//print western-cham, mandaic
	//broadcast TV: CAS, ol chiki, yi
	//hover over each to learn about what we do know about them
	const steps = [
		{
			signage: false,
			education: false,
			print: false,
			broadcast: false,
			image: false,
		},
		{
			signage: true,
			education: false,
			print: false,
			broadcast: false,
			image: false,
		},
		{
			signage: true,
			education: true,
			print: false,
			broadcast: false,
			image: false,
		},
		{
			signage: true,
			education: true,
			print: true,
			broadcast: false,
			image: false,
		},
		{
			signage: true,
			education: true,
			print: true,
			broadcast: true,
			image: false,
		},
		{
			signage: true,
			education: true,
			print: true,
			broadcast: true,
			image: false,
		},
		{
			signage: true,
			education: true,
			print: true,
			broadcast: true,
			image: true,
		},
		{
			signage: false,
			education: false,
			print: false,
			broadcast: false,
			image: false,
		},
	];
	$: props = steps[index];

	//take away foreground at s9?
</script>

<head>
	<link rel="stylesheet" href="https://use.typekit.net/csj5pkv.css" />
</head>
<div class="wrapper">
	<h1>Signs of Life</h1>
	<!-- <Matrix /> -->
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
		</div>
		<div class="foreground" slot="foreground">
			<!-- {#each steps as step, i}
				<section>
					{i}
					{step}
				</section>
			{/each} -->
			<section id="s1">
				<h2>How many scripts are in use?</h2>
				{#if visible}
					<span in:fade|local>Numbers range from <b>34</b> </span>
					<span in:fade|local={{ delay: 1000 }}
						>to <b>4,065</b> from different sources.</span
					>
					<br />
					<br />
					<span in:fade|local={{ delay: 3000 }}
						>It boils down to the fact that we don't know how many are in use
						and how many aren't. There's not even a formal way to measure
						scripts in the goal of knowing if they are "in use" or extinct. So
						we, at the<a
							href="https://www.endangeredalphabets.net/"
							target="_blank">Endangered Alphabet Projects</a
						> started to make a "criterias for health" list, which aims to solve
						this issue. But before we can measure their level of endangerment, we
						need their data. We need the experiences and voices of their writers
						and creators. Take the nine scripts to the right, whose orgins span from
						North America to China. We know they exist, or have existed, but do we
						know enough to measure their vitality?</span
					>
				{/if}
			</section>
			<section id="s2">
				Let's start with <b>signage</b>. Do we know if there signs in the
				script? Such as signs in airports or even in strees?
			</section>
			<section id="s3">
				In terms of <b>education</b>, which do we know are taught in government,
				community or private schools? Do we know if they are instructed at all?
			</section>
			<section id="s4">
				Do we know what their <b>printed</b> status is? If there are stories that
				are woven by their form, or newspapers published with their curves?
			</section>
			<section id="s5">
				Do we know if they are <b>broadcasted</b>? In television - whether it
				take the form of subtitles, captions or even credits?
			</section>
			<section id="s6">
				We know bits and pieces, but we don't know the whole story.
			</section>
			<section id="s7" />
			<section id="s8">
				But with our collaborators, and our friends, we can fill these in.
			</section>
			<section id="s9" />
		</div>

		<h1>hola</h1>
	</Scroller>
	<h1>and again</h1>
</div>

<style>
	.wrapper {
		margin: 10vh;
	}
	.background {
		text-align: right;
	}
	.foreground {
		text-align: left;
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

	section {
		height: 80vh;
		/* padding: 10vh; */
		line-height: 2em;
		width: 50%;
		font-family: brandon-grotesque, sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	a:hover,
	a:active {
		background-color: #faf38da6;
		color: rgb(8, 64, 129);
	}

	a {
		text-decoration: none;
		color: black;
	}
</style>

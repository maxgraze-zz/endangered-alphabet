<script>
	import Scroller from "./utils/Scroller.svelte";
	import Grid from "./components/Grid.svelte";
	import { fade, fly } from "svelte/transition";
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
		{
			signage: false,
			education: false,
			print: false,
			broadcast: false,
			image: false,
			end: true,
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
					<span in:fade|local={{ delay: 3000 }}>
						It boils down to the fact that we don't know how many are in use and
						how many aren't. We are facing a <b>neglected</b> dataset. There's not
						even a formal way to measure scripts in the goal of knowing if they are
						"in use" or extinct.
					</span>
					<br />
					<br />
					<span in:fade|local={{ delay: 7000, duration: 400 }}>
						So we, at the
						<a href="https://www.endangeredalphabets.net/" target="_blank"
							>Endangered Alphabet Projects</a
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
				<br />
				<br />
				<br />
				<blockquote>
					Neglect may reflect many things: commitment but lack of means; amnesia
					or apathy; perhaps forces more complex and sinister.
				</blockquote>
				<br />
				<span id="lauret"><i>- Lauret Savoy</i></span>
			</section>
			<section id="s7" />
			<section id="s8">
				But with our collaborators, and our friends, we can fill these in.
			</section>
			<section id="s9" />
			<img
				in:fly|local={{ duration: 500, delay: 300 }}
				src="/images/endangered-ratio.png"
			/> <br />
			<h2 class="end">
				Whatever the reason for its neglectedness, we at the <a
					href="https://www.endangeredalphabets.com/"
				>
					Endangered Alphabets Project</a
				> are going to fill in this missing dataset.
			</h2>
		</div>
	</Scroller>
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
		font-family: brandon-grotesque, sans-serif;
	}

	.rect {
		background-color: antiquewhite;
		/* width: 50%;
		height: 50%; */
	}

	section {
		height: 80vh;
		line-height: 2em;
		width: 50%;
		font-family: brandon-grotesque, sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	a:hover,
	a:active {
		color: rgba(253, 229, 11, 0.966);
		background-color: rgb(30, 106, 194);
	}

	a {
		background-color: rgba(253, 229, 11, 0.507);
		color: rgb(30, 106, 194);
		text-decoration: none;
	}

	img {
		transform: scale(1.25);
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	blockquote {
		color: #2c3e50;
		font-size: 2em;
		line-height: 100%;
		position: relative;
		font-family: Georgia, serif;
		/* width: 300px; */
		margin: 10% auto;
	}
	blockquote::before {
		content: "\201C";
		position: absolute;
		top: -10px;
		left: 0;
		font-family: Arial, sans-serif;
		font-size: 4em;
		font-style: normal;
	}
	blockquote::after {
		content: "\201C";
		position: absolute;
		bottom: -60px;
		right: 0;
		font-family: Arial, sans-serif;
		font-size: 4em;
		font-style: normal;
	}
	#lauret {
		float: right;
		font-size: 2em;
	}

	.end {
		font-size: 2em;
		padding: 20vh 13vh;
		color: #ff3e00;
		font-family: brandon-grotesque, sans-serif;
		font-weight: 400;
	}
</style>

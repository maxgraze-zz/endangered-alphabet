<script>
	// import Scroller from "./utils/Scroller.svelte";
	import Scroller from "@sveltejs/svelte-scroller";
	// import Canvas from "./components/Canvas.svelte";
	// import Circle from "./components/Circle.svelte";

	import Grid from "./components/Grid.svelte";
	import { fade, fly } from "svelte/transition";
	// import viewport from "./actions/useViewportAction";

	export let scroller;
	let index, offset, progress;

	let width = 0;
	let height = 0;
	let visible = false;
	setTimeout(() => (visible = true), 1000);

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
	const numRows = 70;
	const numCols = 100;
	let totalDots = numRows * numCols;
	const dotMargin = 25;
	const canvasWidth = 700;
	const canvasHeight = 700;
	const dotWidth = (canvasWidth - 2 * dotMargin) / numCols - dotMargin;
	const dotHeight = (canvasHeight - 2 * dotMargin) / numRows - dotMargin;
	const dotDiameter = dotWidth;
	const xMargin = dotMargin;
	const yMargin =
		(canvasHeight - (2 * dotMargin + numRows * dotDiameter)) / numRows;
	let ethnologueColor = "green";
	let omniglotColor = "red";
	let noScripts = "grey";
	let dotRadius = 3;
	//var dotRadius = dotDiameter * 0.5;
	let count = 0;
	let ratio = 34;
	let ratio2 = 4063;
</script>

<head>
	<link rel="stylesheet" href="https://use.typekit.net/csj5pkv.css" />
</head>
<div class="wrapper" bind:clientWidth={width} bind:clientHeight={height}>
	<h1>Signs of Life</h1>
	<!-- <Canvas height={canvasWidth} width={canvasHeight}>
		{#each { length: numRows } as _, i (i)}
			{#each { length: numCols } as _, j (j)}
				<Circle
					radius="3"
					x={j * (dotDiameter + xMargin) + dotMargin + xMargin / 2 + dotRadius}
					y={i * (dotDiameter + yMargin) + dotMargin + yMargin / 2 + dotRadius}
					color={totalDots - (ratio + ratio2) > i * numCols + j
						? noScripts
						: totalDots - ratio > i * numCols + j
						? ethnologueColor
						: omniglotColor}
				/>
			{/each}
		{/each}
	</Canvas> -->
	<!-- <Canvas {width} {height}>
		<Matrix />
	</Canvas> -->
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
						>to <b>4,065</b> depending on the source.</span
					>
					<br />
					<br />
					<span in:fade|local={{ delay: 3000 }}>
						It boils down to the fact that we don't know how many are in use and
						how many aren't. We are facing a <b>neglected</b> dataset. There's not
						even a formal way to measure scripts with the goal of understanding whether
						they are 'in use,' endangered, or extinct.
					</span>
					<br />
					<br />
					<span in:fade|local={{ delay: 7000, duration: 400 }}>
						So we at the
						<a href="https://www.endangeredalphabets.net/" target="_blank"
							>Endangered Alphabets Project</a
						>
						started to make a
						<span style="color:#ff3e00; font-weight:400">Red List</span>, which
						establishes criteria that aims to solve this issue. But before we
						can measure their level of endangerment, we need their data. We need
						the experiences and voices of their writers and creators. Take the
						nine scripts to the right, whose origins range from Canada to China.
						We know they exist, or have existed, but do we know enough to
						measure their vitality?</span
					>
				{/if}
			</section>
			<section id="s2">
				Let's start with <b>signage</b>. Do we know whether there are public
				signs in the script? Such as signs in airports or even in streets?
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />

				We can answer yes or no for 8 of these scripts.
			</section>
			<section id="s3">
				In terms of <b>education</b>, do we know which are taught at all? In
				what context? In government, community, or private schools?
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />

				We only know for five of these.
			</section>
			<section id="s4">
				Do we know about their <b>printed</b> status? Are they used to preserve
				stories or circulate news?
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />

				We can only answer for four of these.
			</section>
			<section id="s5">
				Do we know if they are <b>broadcasted</b>? Do they appear on television,
				whether in subtitles, captions, or even credits?
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
				<cite>- Lauret Savoy</cite>
				<br />
				<br />
				<br />
				We are missing the data to assess the health of world's scripts. How can
				we preserve and protect our world hertiage without the data foundation.
			</section>
			<section id="s7" />
			<section id="s8">
				But with our collaborators, and our friends, we can fill these holes. We
				c
			</section>
			<section id="s9" />
			<div>
				<!-- <img
					in:fly|local={{ duration: 500, delay: 300 }}
					src="/images/endangered-ratio.png"
					alt="50% of languages are endangered and 85% of scripts as well"
				/> <br /> -->
				<h2 class="end">
					Whatever the reason for their neglected status, we at the <a
						href="https://www.endangeredalphabets.com/"
					>
						Endangered Alphabets Project</a
					> are going to fill the gaps of their missing datasets to let these writing
					systems be seen again.
				</h2>
			</div>
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
		font-weight: 100;
		font-size: 2rem;
		max-width: 600px;
		line-height: 1.4;
		position: relative;
		margin: 0;
		padding: 0.5rem;
		text-align: center;
	}

	blockquote:before,
	blockquote:after {
		position: absolute;
		color: #f1efe6;
		font-size: 8rem;
		width: 4rem;
		height: 4rem;
	}

	blockquote:before {
		content: "“";
		left: -3rem;
		top: -2rem;
	}

	blockquote:after {
		content: "”";
		right: -3rem;
		bottom: 1rem;
	}

	cite {
		line-height: 3;
		float: right;
	}

	.end {
		font-size: 2em;
		padding: 20vh 13vh;
		color: #353535;
		font-family: brandon-grotesque, sans-serif;
		font-weight: 400;
	}
</style>

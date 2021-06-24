<script>
	import Scripts from "../Scripts/index.svelte";
	import { fade } from "svelte/transition";
	import App from "../App.svelte";

	/*
    TODO:
    - grid should be a square and not a rectangle
	- svgs should be centered
    - gird should fill the whole screen if on a phone
    - disappearing function and transition

    FIXME: 
    - put all into arrays and then delete? 
    */

	// export let education = false;
	//export let signage, education, print, broadcast;
	export let visibleCategories = {};

	let scripts = [
		{ name: "CAS", cat: "broadcast" },
		{ name: "manchu", cat: "education" },
		{ name: "ol-chiki", cat: "broadcast" },
		{ name: "ranjana", cat: "education" },
		{ name: "shuishu", cat: "signage" },
		{ name: "tifinagh", cat: "education" },
		{ name: "mandaic", cat: "print" },
		{ name: "western-cham", cat: "broadcast" },
		{ name: "yi", cat: "broadcast" },
	];
	// const index = scripts.index(item);
	// if (~index) scripts["blank"];
</script>

<!-- <div class="wrapper"> -->
<!-- <img src={scripts.yi} alt="yi script" /> -->
<!-- <label>
	<input type="checkbox" bind:checked={education} />
</label> -->
<div class="grid">
	{#each scripts as script}
		<div transition:fade|local class="box">
			<Scripts name={!visibleCategories[script.cat] ? script.name : "blank"} />
		</div>
	{/each}
	{#if visibleCategories.broadcast === true}
		<div class="box stack-top">I'm a div</div>
	{/if}
</div>

<style>
	.grid {
		display: grid;
		display: inline-grid;
		/* grid-template-columns: auto auto auto; */
		grid-template-columns: repeat(3, minmax(0, 1fr));
		place-items: center;
		/* margin: 5% 20% 20% 20%; */
		margin: auto;
		aspect-ratio: 1;
		width: 40%;
		position: relative;
	}
	/* this doesn't work */
	.grid .box {
		border: 1px dashed rgb(100, 100, 100);
	}

	.stack-top {
		z-index: 10;
		width: 400px;
		height: 400px;
		background-color: yellow;
		position: absolute;
		text-align: center;
	}
</style>

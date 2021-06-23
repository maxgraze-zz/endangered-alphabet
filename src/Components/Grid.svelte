<script>
	import Scripts from "../Scripts/index.svelte";
	import { fade } from "svelte/transition";

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
	export let signage, education, print, broadcast;

	$: console.log(education);

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
		{#if !education && script.cat === "education"}
			<div transition:fade|local class="box">
				<Scripts name={script.name} />
			</div>
		{:else if education && script.cat === "education"}
			<div class="box">
				<Scripts name="blank" />
			</div>
		{/if}
		{#if !print && script.cat === "print"}
			<div class="box">
				<Scripts name={script.name} />
			</div>
		{:else if print && script.cat === "print"}
			<div class="box">
				<Scripts name="blank" />
			</div>
		{/if}
		{#if !signage && script.cat === "signage"}
			<div class="box">
				<Scripts name={script.name} />
			</div>
		{:else if signage && script.cat === "signage"}
			<div class="box">
				<Scripts name="blank" />
			</div>
		{/if}
		{#if !broadcast && script.cat === "broadcast"}
			<div class="box">
				<Scripts name={script.name} />
			</div>
		{:else if broadcast && script.cat === "broadcast"}
			<div class="box">
				<Scripts name="blank" />
			</div>
		{/if}
	{/each}
	<!-- <div class="broadcast">
		<Scripts name="CAS" />
	</div>
	<div class="education">
		<Scripts name="manchu" />
	</div>
	<div class="print">
		<Scripts name="mandaic" />
	</div>
	<div class="broadcast">
		<Scripts name="ol-chiki" />
	</div>
	<div class="education">
		<Scripts name="ranja" />
	</div>
	<div class="signage">
		<Scripts name="shuishu" />
	</div>
	<div class="education">
		<Scripts name="tifinagh" />
	</div>
	<div class="print">
		<Scripts name="western-cham" />
	</div>
	<div class="broadcast">
		<Scripts name="yi" />
	</div> -->
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
	}
	/* this doesn't work */
	.grid .box {
		border: 1px dashed rgb(100, 100, 100);
	}
</style>

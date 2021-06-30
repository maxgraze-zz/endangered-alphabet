<!-- <script>
	import { onDestroy, setContext, createEventDispatcher } from "svelte";
	import { draw } from "svelte/transition";
	import { setupCanvas } from "../utils/canvas";
	export let width = 0;
	export let height = 0;
	export let pixelRatio = window.devicePixelRatio || 1;
	export let compositeType = "";
	const dispatch = createEventDispatcher();
	const drawFunctions = [];
	let canvas;
	let ctx;
	let frameId;
	let pendingInvalidation = false;
	setContext("canvas", {
		register(fn) {
			drawFunctions.push(fn);
		},
		deregister(fn) {
			drawFunctions.splice(drawFunctions.indexOf(fn), 1);
		},
		invalidate() {
			if (pendingInvalidation) return;
			pendingInvalidation = true;
			frameId = requestAnimationFrame(update);
		},
	});
	function handleClick(e) {
		const { layerX: x, layerY: y } = e;
		dispatch("click", {
			x: x - width / 2,
			y: y - height / 2,
		});
	}
	function update() {
		if (!ctx) return;
		ctx.clearRect(-width / 2, -height / 2, width, height);
		drawFunctions.forEach((fn) => {
			ctx.save();
			fn(ctx);
			ctx.restore();
		});
		pendingInvalidation = false;
	}
	onDestroy(() => {
		if (frameId) {
			cancelAnimationFrame(frameId);
		}
	});
	$: ctx = setupCanvas(canvas, width, height, pixelRatio, compositeType);
</script>

<canvas bind:this={canvas} on:click={handleClick} />
<slot />

<style>
	canvas {
		position: absolute;
		z-index: 10;
	}
</style> -->
<script>
	import { onMount, setContext } from "svelte";
	let canvas;
	export let height;
	export let width;
	const drawFunctions = [];

	setContext("canvas", {
		register(drawFn) {
			drawFunctions.push(drawFn);
		},
		unregister(drawFn) {
			drawFunctions.splice(drawFunctions.indexOf(drawFn), 1);
		},
	});
	onMount(() => {
		const context = canvas.getContext("2d");
		canvas.height = height;
		canvas.width = width;
		// Set the colors you want to support in this array
		const colors = [
			"#F03C69",
			"#FFCD32",
			"#2BAD5D",
			"#2ABABF",
			"#CDDC28",
			"#B91E8C",
		];
		const canvasWidth = width;
		const canvasHeight = height; // this one is new

		drawFunctions.forEach((drawFn) => {
			drawFn(context);
		});
	});
</script>

<canvas bind:this={canvas} />

<slot />

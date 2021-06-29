<script>
	import { getContext, onMount, onDestroy, afterUpdate } from "svelte";

	const { register, deregister, invalidate } = getContext("canvas");

	let xMargin, yMargin, dotDiameter;
	let parentWidth = 500;
	let parentHeight = 500;

	// $: (width, height), draw();

	function draw(ctx) {
		console.log("drawing");
		//if (!canvas) return;
		let ethnologueColor = "green";
		let omniglotColor = "red";
		let noScripts = "grey";
		let dotMargin = 25;
		let numRows = 70;
		let numCols = 100;
		let totalDots = numRows * numCols;
		// let context = canvas.getContext("2d");

		// Because we don't know which direction (x vs. y) is the limiting sizing
		// factor, we'll calculate both first.
		let dotWidth = (parentWidth - 2 * dotMargin) / numCols - dotMargin;
		let dotHeight = (parentHeight - 2 * dotMargin) / numRows - dotMargin;

		// Now, we use the limiting dimension to set the diameter.

		if (dotWidth > dotHeight) {
			let dotDiameter = dotHeight;
			let xMargin = dotMargin;
			let yMargin = dotMargin;
		} else {
			let dotDiameter = dotWidth;
			let xMargin = dotMargin;
			let yMargin =
				(parentHeight - (2 * dotMargin + numRows * dotDiameter)) / numRows;
		}
		let dotRadius = 1;
		//let dotRadius = dotDiameter * 0.5;
		let count = 0;
		let ratio = 34;
		let ratio2 = 4063;

		for (let i = 0; i < numRows; i++) {
			for (let j = 0; j < numCols; j++) {
				let x =
					j * (dotDiameter + xMargin) + dotMargin + xMargin / 2 + dotRadius;
				let y =
					i * (dotDiameter + yMargin) + dotMargin + yMargin / 2 + dotRadius;
				// Grab a random color from the array.
				let color =
					totalDots - (ratio + ratio2) > count
						? noScripts
						: totalDots - ratio > count
						? ethnologueColor
						: omniglotColor;
				count++;
				drawDot(x, y, dotRadius, color);
			}
		}

		function drawDot(x, y, radius, color) {
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
			ctx.fillStyle = color;
			ctx.fill();
		}
	}

	onMount(() => {
		invalidate();
		register(draw);
		return () => {
			deregister(draw);
		};
	});
	afterUpdate(invalidate);
	onDestroy(invalidate);
</script>

<!-- <div class="container" bind:clientWidth={width} bind:clientHeight={height}>
	<canvas bind:this={canvas} {width} {height} />
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
	}
	canvas {
		border: 1px solid red;
	}
</style> -->

<script>
	import { onMount } from "svelte";
	const { register, deregister, invalidate } = getContext("canvas");

	let canvas;
	let context;
	let width = 500;
	let height = 500;

	$: (width, height), draw();

	const draw = () => {
		if (!canvas) return;
		let ethnologueColor = "green";
		let omniglotColor = "red";
		let noScripts = "grey";
		var dotMargin = 25;
		var numRows = 70;
		var numCols = 100;
		let totalDots = numRows * numCols;
		var context = canvas.getContext("2d");

		// Because we don't know which direction (x vs. y) is the limiting sizing
		// factor, we'll calculate both first.
		var dotWidth = (width - 2 * dotMargin) / numCols - dotMargin;
		var dotHeight = (height - 2 * dotMargin) / numRows - dotMargin;

		// Now, we use the limiting dimension to set the diameter.

		if (dotWidth > dotHeight) {
			var dotDiameter = dotHeight;
			var xMargin = dotMargin;
			var yMargin = dotMargin;
		} else {
			var dotDiameter = dotWidth;
			var xMargin = dotMargin;
			var yMargin =
				(height - (2 * dotMargin + numRows * dotDiameter)) / numRows;
		}
		let dotRadius = 1;
		//var dotRadius = dotDiameter * 0.5;
		let count = 0;
		let ratio = 34;
		let ratio2 = 4063;

		for (var i = 0; i < numRows; i++) {
			for (var j = 0; j < numCols; j++) {
				var x =
					j * (dotDiameter + xMargin) + dotMargin + xMargin / 2 + dotRadius;
				var y =
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
			context.beginPath();
			context.arc(x, y, radius, 0, 2 * Math.PI, false);
			context.fillStyle = color;
			context.fill();
		}
	};
</script>

<div class="container" bind:clientWidth={width} bind:clientHeight={height}>
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
</style>

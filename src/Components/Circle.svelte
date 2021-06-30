<script>
	import { getContext, onMount } from "svelte";

	export let radius;
	export let x;
	export let y;
	export let color;
	const { register, unregister } = getContext("canvas");
	onMount(() => {
		register(drawDot);

		return () => {
			unregister(drawDot);
		};
	});
	function drawDot(context) {
		//x, y, radius, color
		//console.log(color)
		context.beginPath();
		context.arc(x, y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = color;
		context.fill();
	}
</script>

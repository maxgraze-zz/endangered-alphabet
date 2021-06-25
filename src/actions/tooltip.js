import Tooltip from "../components/Tooltip.svelte";

export function tooltip(node, { data, target = document.body }) {
	console.log(data);
	let div;
	let tooltipComponent;
	function mouseLeave() {
		tooltipComponent.$destroy();
		node.removeEventListener("mouseleave", mouseLeave);
	}
	function mouseEnter(event) {
		// NOTE: remove the `title` attribute, to prevent showing the default browser tooltip
		// remember to set it back on `mouseleave`
		const { clientWidth: targetWidth, clientHeight: targetHeight } = target;

		tooltipComponent = new Tooltip({
			props: {
				data,
				x: event.pageX,
				y: event.pageY,
				targetHeight,
				targetWidth,
			},

			target,
		});
		node.addEventListener("mouseLeave", mouseLeave);
	}
	// function mouseMove(event) {
	// 	function mouseLeave() {
	// 		tooltipComponent.$destroy();
	// 	}

	// 	tooltipComponent.$set({
	// 		x: event.pageX,
	// 		y: event.pageY,
	// 	});
	// }

	node.addEventListener("mouseenter", mouseEnter);
	// node.addEventListener("mouseleave", mouseLeave);
	// node.addEventListener("mousemove", mouseMove);

	return {
		destroy() {
			node.removeEventListener("mouseover", mouseEnter);
		},
		update(data) {
			target = data - target;
		},
	};
}

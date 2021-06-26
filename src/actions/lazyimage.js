import viewportAction from "./useViewportAction.js";

export default function lazyimage(element) {
	const viewportActionMethods = viewportAction(element);

	element.addEventListener("enterViewport", enterViewport);

	function enterViewport() {
		element.src = element.dataset.src;
		element.removeEventListener("enterViewport", enterViewport);
	}
	return {
		destroy() {
			viewportActionMethods.destroy();
			//whenever you add event listeners you need to remove them here
			element.removeEventListener("enterViewport", enterViewport);
		},
	};
}

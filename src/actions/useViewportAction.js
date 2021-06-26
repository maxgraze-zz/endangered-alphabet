let intersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;
	new IntersectionObserver((entries) => {
		//each entries would be either entering or exiting the viewport
		//look through entries
		entries.forEach((entry) => {
			const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";
			entry.target.dispatchEvent(new CustomEvent(eventName));
		});
	});
}

export default function viewport(element) {
	//observing the element to see if it's entering/exiting the viewport
	ensureIntersectionObserver();
	intersectionObserver.observe(element);
	return {
		destroy() {
			//when removed from the dom, unobserve it
			intersectionObserver.unobserve(element);
		},
	};
}

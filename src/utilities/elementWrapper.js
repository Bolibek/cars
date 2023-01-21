export const elemWrapper = (
	element,
	elements,
	event,
	isToggle,
	isNextSibling,
	isAccordion,
	...rest
) => {
	targetElements.forEach((element) => {
		element.addEventListener(event, () => {
			isToggle && element.classList.toggle("active");
			let nextSibling =
				isNextSibling &&
				element.nextElementSibling &&
				element.nextElementSibling.content &&
				(element.innerHTML = content);
			isAccordion && nextSibling.style.maxHeight
				? (nextSibling.style.maxHeight = null)
				: (nextSibling.style.maxHeight = nextSibling.scrollHeight + "px");
		});
	});
};

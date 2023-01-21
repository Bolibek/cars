import { elemWrapper } from "../utilities/elementWrapper";

function accordion() {
	const accordions = document.querySelectorAll(".accordion");
	accordions.forEach((accord) => {
		accord.addEventListener("click", () => {
			accord.classList.toggle("active");
			const panel = accord.nextElementSibling;
			panel.style.maxHeight
				? (panel.style.maxHeight = null)
				: (panel.style.maxHeight = panel.scrollHeight + "px");
		});
	});
}

export default accordion;
// module.exports = accordion;

require("es6-promise").polyfill();
import "nodelist-foreach-polyfill";
import tabs from "./components/tabs.js";
import modal from "./components/modal.js";
import deadlineComputer from "./components/deadline.js";
import cards from "./components/cards.js";
import form from "./components/form.js";
import slider from "./components/slider.js";
import loader from "./components/loader.js";
import accordion from "./components/accordion.js";
import { openModal } from "./components/modal.js";

window.addEventListener("DOMContentLoaded", () => {
	const modalTimer = setTimeout(() => openModal(".modal", modalTimer), 5000);
	tabs();
	modal("[data-modal]", ".modal", modalTimer);
	deadlineComputer();
	cards();
	form(modalTimer);
	slider();
	loader();
	accordion();
});
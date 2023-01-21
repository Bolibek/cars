function deadlineComputer() {
	const deadline = "2023-05-01";
	const getZero = (num) => (num >= 0 && num < 10 ? "0" + num : num);

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector("#hours"),
			minutes = timer.querySelector("#minutes"),
			seconds = timer.querySelector("#seconds"),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const total = Date.parse(endtime) - Date.parse(new Date());
			days.innerHTML = getZero(Math.floor(total / (1000 * 60 * 60 * 24)));
			hours.innerHTML = getZero(Math.floor((total / (1000 * 60 * 60)) % 24));
			minutes.innerHTML = getZero(Math.floor((total / 1000 / 60) % 60));
			seconds.innerHTML = getZero(Math.floor((total / 1000) % 60));
			if (total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock(".timer", deadline);
}

export default deadlineComputer;

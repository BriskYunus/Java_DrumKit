(() => {
	console.log("fired! ready to jam");

	function playDrumKitSound(event) {
		//debugger;
		// select the corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		console.log(audio);

		// debugging / error handling
		// if we dont have a matching audio element, then kill the function
		// ! is a "not" operator or a bang
		// null = nothing
		if (!audio) { return; } // return stops code execution

		// rewind audio everytime on click
		audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener("keydown", playDrumKitSound);
})();
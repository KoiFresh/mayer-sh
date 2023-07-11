function main() {
	const seconds = (Date.now() / 1000).toFixed(0);
	const degrees = ((seconds % 200) * (360 / 200)).toFixed(2);

	const bg = htmx.find(".background")
	bg.style.transform = `rotate(${degrees}deg)`
}

window.onload = main;

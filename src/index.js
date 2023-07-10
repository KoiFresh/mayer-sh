function main() {
	const bg = htmx.find(".background")
	bg.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`
}

window.onload = main;


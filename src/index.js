const backgrounds = [
	"linear-gradient(#4a87ea, #f786f7, #f7aa79)",
	"linear-gradient(#ebf8e1, #f69d3c)",
	"linear-gradient(#3f87a6, #ebf8e1)",
];

function main() {
	const bg = htmx.find(".background")
	bg.style.backgroundImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

window.onload = main;


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const footer = document.querySelector("footer");

//This is actually super cool to learn, can definitely use this more in depth at a later point in
// the class!
modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#456ea2";
		footer.style.color = "white";
        body.style.background = "#4f4f4f"
		modeButton.textContent = "🔆";
	} else {
        body.style.background = "#c1c1c1"
        footer.style.color = "black";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
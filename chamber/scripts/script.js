const today = new Date().getDay();

try {
    let options = {
        year: "numeric",
    };
    document.querySelector("#copyright").textContent =
        new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert("Error with copyright year.");
}

try {
    document.getElementById("dateModified").textContent = document.lastModified;
} catch (e) {
    alert("Error finding last modified date.");
}

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.querySelector("#todayHeading").textContent =
        new Date().toLocaleDateString("en-UK", options);
} catch (e) {
    alert("Error with today's date.");
}


// Hamburger Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

// Chamber meeting messages display Monday and Tuesday

const element = document.getElementById("chambermeet");

if (today === 1 || today === 2) {
    element.style.display = "block";
}

// Script for closing the banner
const banner = document.querySelector('#chambermeet');

if (today === 1 || today === 2) {
    element.style.display = "block";
}

// Script for closing the banner
const closeBtn = document.querySelector('.bannerBtn');
closeBtn.addEventListener('click', function () {
    if (banner.style.display !== "none") {
        banner.style.display = "none";
    }
})
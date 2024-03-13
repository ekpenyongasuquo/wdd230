// Chamber meeting messages display Monday and Tuesday

const banner = document.querySelector('#chambermeet');

if (today === 1 || today === 2) {
    element.style.display = "block";
}

// Script for closing the banner
const closeBtn = document.querySelector('.bannerBtn');
closeBtn.addEventListener('click', function() {
    if (banner.style.display !== "none") {
        banner.style.display = "none";
    }
})
function showSideNav()  {
    document.querySelector(".nav-two").classList.toggle("navigation-side");
    document.querySelector(".menu-button-a").classList.toggle("close");
}

function showPanel() {
    document.querySelector(".accordion").classList.toggle("active-accordion");
    document.querySelector(".panel").classList.toggle("active-panel");
    document.querySelector(".click").classList.toggle("view-terms");
}

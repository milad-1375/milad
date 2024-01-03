const $ = document;
const sideNav = $.querySelector(".navbar__sideNav");
const navbarOpen = $.querySelector(".navbar__toggler");
const navbarClose = $.querySelector(".navbar__toggler-close")

navbarOpen.addEventListener("click", function() {
    sideNav.style.transform = "translateX(0%)";
})

navbarClose.addEventListener("click", function() {
    sideNav.style.transform = "translateX(100%)";
})
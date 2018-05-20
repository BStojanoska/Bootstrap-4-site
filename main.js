const navbar = document.getElementById("navbarToggler");
// $('body').scrollspy({ target: '#navbarid' })

window.addEventListener("scroll", () => {
    return navbar.classList.remove("show");
});


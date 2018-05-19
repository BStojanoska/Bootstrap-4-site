const navbar = document.getElementById("navbarToggler");
$('body').scrollspy({ target: '#navbar-example' })

window.addEventListener("scroll", () => {
    return navbar.classList.remove("show");
});


var icons = document.getElementById("icons")

icons.onclick = function () {
    document.body.classList.toggle("dark-them");
    if (document.body.classList.contains("dark-them")) {
        icons.src = "images/moon.png";
    }
    else {
        icons.src = "images/sun.png";
    }
}

document.querySelectorAll(".nav-link").forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
    }
});



document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        this.textContent = "Switch to Light Theme";
    } else {
        this.textContent = "Switch to Dark Theme";
    }
});

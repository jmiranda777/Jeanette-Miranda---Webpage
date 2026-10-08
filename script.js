// Find the dark mode button
const themeToggler = document.querySelector("#theme_toggler");

// Check if the user already selected a theme
function retrieveTheme() {
    const savedTheme = localStorage.getItem("website_theme");

    if (savedTheme == "dark_mode") {
        document.body.classList.add("dark_mode");
    }
}

// Change the theme when button is clicked
themeToggler.addEventListener("click", function () {
    document.body.classList.toggle("dark_mode");

    // Save the user's theme choice
    if (document.body.classList.contains("dark_mode")) {
        localStorage.setItem("website_theme", "dark_mode");
    } else {
        localStorage.setItem("website_theme", "default");
    }
});

// Load the saved theme when the page loads
retrieveTheme();
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");

    // Toggle sidebar visibility on small screens
    hamburger.addEventListener("click", () => {
        sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");

    const now = Date.now();
    localStorage.setItem("lastVisit", now);

    if (!lastVisit) {
        sidebar.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysPassed < 1) {
            sidebar.textContent = "Back so soon! Awesome!";
        } else if (daysPassed === 1) {
            sidebar.textContent = `You last visited 1 day ago.`;
        } else {
            sidebar.textContent = `You last visited ${daysPassed} days ago.`;
        }
    }
});

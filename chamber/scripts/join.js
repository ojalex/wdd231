document.addEventListener("DOMContentLoaded", () => {
    // Toggle modals for membership levels
    document.querySelectorAll(".modal-trigger").forEach(button => {
        button.addEventListener("click", (event) => {
            const modalId = event.target.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            
            // If modal is open, close it; if closed, open it
            if (modal.open) {
                modal.close();
            } else {
                modal.showModal();
            }
        });
    });
    
    // Close modals when clicking the close button
    document.querySelectorAll(".close-modal").forEach(button => {
        button.addEventListener("click", (event) => {
            event.target.closest("dialog").close();
        });
    });

    // Auto-fill timestamp field with the current date and time
    document.getElementById("timestamp").value = new Date().toISOString();
    
    // Membership cards animation on page load
    const cards = document.querySelectorAll(".membership-card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("fade-in");
        }, index * 200);
    });
});


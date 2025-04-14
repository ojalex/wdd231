document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("data/attractions.json");
    const attractions = await response.json();
    const container = document.getElementById("attractions-container");

    attractions.forEach(attraction => {
        const card = document.createElement("div");
        card.classList.add("attraction-card");

        card.innerHTML = `
            <h2>${attraction.name}</h2>
            <figure>
                <img src="${attraction.image}" alt="${attraction.name}">
            </figure>
            <address>${attraction.address}</address>
            <p>${attraction.description}</p>
            <button class="learn-more">Learn More</button>
        `;

        container.appendChild(card);
    });
});

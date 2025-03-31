// weather data
const weatherData = {
    temperature: 28, // Static temperature
    description: "Partly Cloudy",
    humidity: 55,
    icon: "images/cloudy.png" // Using a local image showing cloud
};

// Function to update the UI with static data
function displayWeather() {
    document.getElementById("temperature").textContent = weatherData.temperature;
    document.getElementById("description").textContent = weatherData.description;
    document.getElementById("humidity").textContent = weatherData.humidity;
    document.getElementById("weather-icon").src = weatherData.icon;
}

// Run function when the page loads
document.addEventListener("DOMContentLoaded", displayWeather);

// Update date modified
document.getElementById("lastModified").textContent = document.lastModified;

// Toggle the mobile navigation menu
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('header nav').classList.toggle('active');
});


// Using the JSON data source, display the member information on the page 
// using the fetch method and async/await functionality.

document.addEventListener("DOMContentLoaded", async () => {
    const membersContainer = document.getElementById("members-container");
    const toggleViewBtn = document.getElementById("toggle-view");
    let isGridView = true;

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = "";
        members.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member-card");
            if (!isGridView) memberDiv.classList.add("list-view");

            memberDiv.innerHTML = `
                <img src="${member.image}" alt="${member.name} Logo">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            membersContainer.appendChild(memberDiv);
        });
    }

    toggleViewBtn.addEventListener("click", () => {
        isGridView = !isGridView;
        membersContainer.classList.toggle("grid-view", isGridView);
        fetchMembers();
    });

    fetchMembers();
});

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


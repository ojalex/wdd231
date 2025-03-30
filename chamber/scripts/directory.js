// Simulated weather data
const weatherData = {
    temperature: 28, // Static temperature
    description: "Partly Cloudy",
    humidity: 55,
    icon: "weather-icons/cloudy.png" // Use a local image
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


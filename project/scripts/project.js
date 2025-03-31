/* Footer */
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last modified on: " + text;
document.getElementById("currentyear").innerHTML = "&copy2024 Alex Otieno Juma, Kenya"

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // Contact services array of objects
  const services = [
    { id: "donate", name: "Donate", averagerating: 4.5 },
    { id: "join", name: "Join Us", averagerating: 4.7 },
    { id: "offers", name: "Career", averagerating: 3.5 },
    { id: "location", name: "Our Location", averagerating: 3.9 },
    { id: "agent", name: "Talk to Our Agent", averagerating: 5.0 }
];


// Get the <select> element by ID
const serviceSelect = document.getElementById('serviceName');

// Loop through the products array to create the option elements
services.forEach(service => {
    const option = document.createElement('option');
    option.value = service.id;  // Use the product id as the value
    option.textContent = service.name;  // Use the product name as the visible text
    serviceSelect.appendChild(option);  // Append the option to the select element
});

function mobile() {
  document.getElementById("show").innerHTML = "Mobile Number: +254722164299";
}
function mail() {
  document.getElementById("show").innerHTML = "E-Mail: juma@gmail.com";
}
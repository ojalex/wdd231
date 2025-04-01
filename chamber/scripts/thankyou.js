document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    const firstName = urlParams.get("first-name") || "N/A";
    const lastName = urlParams.get("last-name") || "N/A";
    const email = urlParams.get("email") || "N/A";
    const phone = urlParams.get("phone") || "N/A";
    const businessName = urlParams.get("organization") || "N/A";
    const timestamp = urlParams.get("timestamp") || "N/A";
    
    document.getElementById("first-name").textContent = firstName;
    document.getElementById("last-name").textContent = lastName;
    document.getElementById("email").textContent = email;
    document.getElementById("phone").textContent = phone;
    document.getElementById("business-name").textContent = businessName;
    document.getElementById("timestamp").textContent = timestamp;
});


// Thank you form timestamp and return everything that user enters
document.addEventListener("DOMContentLoaded", function() {
    // Get form data from the URL query parameters
    const params = new URLSearchParams(window.location.search);
    
    // Populate the thank you page with the submitted data
    document.getElementById("firstName").textContent = params.get("firstName");
    document.getElementById("lastName").textContent = params.get("lastName");
    document.getElementById("email").textContent = params.get("email");
    document.getElementById("phone").textContent = params.get("phone");
    document.getElementById("organization").textContent = params.get("organization");
    document.getElementById("membershipLevel").textContent = params.get("membershipLevel");
    
    // Set the timestamp
    document.getElementById("timestamp").textContent = params.get("timestamp");

    // Set the last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});

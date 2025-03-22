// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the page from refreshing

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you for your message, ${name}!\nWe will get back to you at ${email}.`);
        document.getElementById("contact-form").reset(); // Reset the form after submission
    } else {
        alert("Please fill out all fields.");
    }
});

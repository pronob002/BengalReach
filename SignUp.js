function toggleInput() {
    const emailInput = document.getElementById("email").parentElement;
    const phoneInput = document.getElementById("phone-group");
    const toggleLinks = document.querySelectorAll(".toggle-link");

    if (emailInput.style.display !== "none") {
        emailInput.style.display = "none";
        phoneInput.style.display = "block";
    } else {
        emailInput.style.display = "block";
        phoneInput.style.display = "none";
    }
}

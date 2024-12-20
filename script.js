const emailInput = document.getElementById("email");
const continueButton = document.getElementById("continue-btn");

emailInput.addEventListener("input", function () {
    if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
        continueButton.disabled = false;
        continueButton.style.backgroundColor = "#0077ff";
        continueButton.style.cursor = "pointer";
    } else {
        continueButton.disabled = true;
        continueButton.style.backgroundColor = "#cce7f8";
        continueButton.style.cursor = "not-allowed";
    }
});

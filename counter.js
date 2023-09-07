function isPositiveNumber(value) {
    return typeof value === 'number' && isFinite(value) && value > 0;
}

function convertWeight() {
    let kilogramsInput = document.getElementById("inputKilograms").value;
    let kilograms = Number(kilogramsInput);

    if (isPositiveNumber(kilograms)) {
        let grams = kilograms * 1000; // 1 kilogram = 1000 grams
        let ounces = kilograms * 35.274; // Approximately 1 kilogram = 35.274 ounces
        let pounds = kilograms * 2.20462; // Approximately 1 kilogram = 2.20462 pounds

        document.getElementById("resultGrams").textContent = grams.toFixed(2) + " grams";
        document.getElementById("resultOunces").textContent = ounces.toFixed(2) + " ounces";
        document.getElementById("resultPounds").textContent = pounds.toFixed(2) + " pounds";
    } else {
        displayPopupMessage("Please enter a valid positive number for kilograms.");
    }
}
function displayPopupMessage(message) {
    const popupMessageElement = document.getElementById("popupMessage");
    popupMessageElement.textContent = message;
    const popupModal = document.getElementById("popupModal");
    popupModal.style.display = "block";
}
function closePopupModal() {
    const popupModal = document.getElementById("popupModal");
    popupModal.style.display = "none";
}

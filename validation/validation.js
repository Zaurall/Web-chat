function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Valid formats
// (123) 456-7890
// (123)456-7890
// 123-456-7890
// 123.456.7890
// 1234567890
// +31636363634
// 075-63546725
function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return phoneRegex.test(phoneNumber);
}
  
document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email').value;
    const phoneNumberInput = document.getElementById('phoneNumber').value;

    let validationResult = "<h2>Validation Result:</h2>";
    if (isValidEmail(emailInput)) {
        validationResult += "<p>Email is valid.</p>";
    } else {
        validationResult += "<p>Email is invalid.</p>";
    }

    if (isValidPhoneNumber(phoneNumberInput)) {
        validationResult += "<p>Phone number is valid.</p>";
    } else {
        validationResult += "<p>Phone number is invalid.</p>";
    }

    document.getElementById('validationResult').innerHTML = validationResult;
});

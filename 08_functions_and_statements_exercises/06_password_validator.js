function validatePassword(password) {
    const length = password.length;
    const digitCount = (password.match(/\d/g) || []).length;
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    let invalidPass = false;

    if (length < 6 || length > 10) {
        console.log("Password must be between 6 and 10 characters");
        invalidPass = true;
    }

    if (hasSpecialChars) {
        console.log("Password must consist only of letters and digits");
        invalidPass = true;
    }

    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
        invalidPass = true;
    }

    if (!invalidPass) {
        console.log("Password is valid");
    }
}

// validatePassword("logIn");
// validatePassword("MyPass123");
// validatePassword("Pa$s$s");

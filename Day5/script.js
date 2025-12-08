function goLogin() {
    window.location.href = "login.html";
}

// Signup validation
function registerUser() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const pass = document.getElementById("signupPassword").value;

    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (!regex.test(pass)) {
        alert("Password must contain 8+ characters, numbers & symbols!");
        return false;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);

    alert("Signup successful! Login to continue.");
    window.location.href = "login.html";
    return false;
}

// Login validation
function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;

    if (email === localStorage.getItem("email") && pass === localStorage.getItem("password")) {
        alert("Recharge Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials! Try again.");
    }
    return false;
}

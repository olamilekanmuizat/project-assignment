const username = document.getElementById("username");
const password = document.getElementById("password");
const phone = document.getElementById("phone");

const usermsg = document.getElementById("usermsg");
const passmsg = document.getElementById("passmsg");
const phonemsg = document.getElementById("phonemsg");

// Regex patterns
const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegex = /^\+234\d{10}$/;

// username validation
username.addEventListener("input", () => {

    if(usernameRegex.test(username.value)){
        usermsg.textContent = "Valid Username";
        usermsg.className = "valid";
    }
    else{
        usermsg.textContent = "5-15 alphanumeric characters";
        usermsg.className = "invalid";
    }
});

// password validation
password.addEventListener("input", () => {
    if(passwordRegex.test(password.value)){
        passmsg.textContent = "Strong password";
        passmsg.className = "valid";
    }
    else{
        passmsg.textContent = "Min 8 chars, 1 uppercase, 1 digit, 1 special character";
        passmsg.className = "invalid";
    }
});

// phone validation
phone.addEventListener("input", () => {

    if(phoneRegex.test(phone.value)){
        phonemsg.textContent = "Valid Number";
        phonemsg.className = "valid";
    }
    else{
        phonemsg.textContent = "Must start with +234 and contain 10 digits";
        phonemsg.className = "invalid";
    }
});
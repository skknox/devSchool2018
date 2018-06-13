function showSignUp() {
    var signUpBox = document.getElementById("signUpBox");
    var signUpAlert = document.getElementById("signupAlert");
    if (signUpBox.style.display === "none") {
        signUpBox.style.display = "";
        signUpAlert.style.display = "none";
    } else {
        signUpBox.style.display = "none";
    }
}

function submitSignUp(){
    var signUpBox = document.getElementById("signUpBox");
    var signUpAlert = document.getElementById("signupAlert");
        signUpBox.style.display = "none";
}


//myDiv.innerText = "Hello from Sydney";
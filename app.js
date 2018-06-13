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
    var matchInfo = document.getElementById("matchInfo");
    signUpBox.style.display = "none";
    matchInfo.style.display = "";
}


//myDiv.innerText = "Hello from Sydney";
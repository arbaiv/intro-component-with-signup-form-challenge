var fname = document.querySelector("#fname-sec input");
var lname = document.querySelector("#lname-sec input");
var email = document.querySelector("#email-sec input");
var password = document.querySelector("#password-sec input");

var fnameError = document.getElementById("fname-error");
var lnameError = document.getElementById("lname-error");
var emailError = document.getElementById("email-error");
var emailErrorText = document.querySelector("#email-error p"); 
var passwordError = document.getElementById("password-error");

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
});
//For First name validation
fname.addEventListener("invalid", function(e){
    if(e.target.validity.valueMissing){
        e.target.setCustomValidity(" ");
        fnameError.className = "error-validate";
        fname.classList.add("input-design-error");
    } else {
        e.target.setCustomValidity(" ");
        fnameError.className = "error-sec";
        fname.classList.remove("input-design-error");
    }
});
// For Last name validation
lname.addEventListener("invalid", function(e){
    if(e.target.validity.valueMissing){
        e.target.setCustomValidity(" ");
        lnameError.className = "error-validate";
        lname.classList.add("input-design-error");
    } else {
        e.target.setCustomValidity(" ");
        lnameError.className = "error-sec";
        lname.classList.remove("input-design-error");
    }
});
// For Email validation
email.addEventListener("invalid", function(e){
    if(e.target.validity.valueMissing){
        e.target.setCustomValidity(" ");
        emailErrorText.textContent = "Email cannot be empty";
        emailError.className = "error-validate";
        email.classList.add("input-design-error");
        console.log("error");
    } else if (e.target.validity.typeMismatch){
        e.target.setCustomValidity(" ");
        emailErrorText.textContent = "Looks like this is not an email";
        emailError.className = "error-validate";
        email.classList.add("input-design-error");
    } else {
        emailErrorText = " ";
        emailError.className = "error-sec";
        email.classList.remove("input-design-error");
    }
});
// For passsword validation
password.addEventListener("invalid", function(e){
    if(e.target.validity.valueMissing){
        e.target.setCustomValidity(" ");
        passwordError.className = "error-validate";
        password.classList.add("input-design-error");
    } else {
        e.target.setCustomValidity(" ");
        passwordError.className = "error-sec";
        password.classList.remove("input-design-error");
    }
});


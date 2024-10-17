const errorLabel = document.querySelector(".signup__error");
const inputBox = document.querySelector(".signup__input");
const form = document.querySelector(".signup__form");
const signUpPage = document.querySelector(".signup");
const successPage = document.querySelector(".success");
const emailHolder = document.getElementById("user-email")


inputBox.addEventListener("input", () => {
    
    if (!inputBox.validity.valid) {
        errorLabel.classList.remove("hidden");
    } else {
        errorLabel.classList.add("hidden");
    }
});

form.addEventListener("submit", e => {
    e.preventDefault();

    if (!inputBox.validity.valid || inputBox.value === "") {
        errorLabel.classList.remove("hidden");
    } else {
        signUpPage.classList.add("hidden");
        successPage.classList.remove("hidden");
        emailHolder.textContent = inputBox.value;
    }
});
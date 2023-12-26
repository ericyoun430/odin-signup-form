function turnInvalid(field) {
    field.style.border = "solid 1px red";
}

function turnValid(field) {
    field.style.border = "solid 1px lightgray";
}

let passwordField = document.querySelector("#password");
let confPasswordField = document.querySelector("#conf_password");
const invalidPasswordMsg = document.querySelector(".invalid-password");
const invalidPasswordMsgParent = invalidPasswordMsg.parentElement;
invalidPasswordMsg.remove();

let passwords = [passwordField, confPasswordField];
passwords.map((passField) => {
    passField.addEventListener('keyup', () => {
        passwordField = document.querySelector("#password");
        confPasswordField = document.querySelector("#conf_password");
        console.log(passwordField.value + "|" + confPasswordField.value);
    
        if (passwordField.value === confPasswordField.value) {
            turnValid(passwordField);
            turnValid(confPasswordField);
            invalidPasswordMsg.remove();
        } else {
            turnInvalid(passwordField);
            turnInvalid(confPasswordField);
            invalidPasswordMsgParent.append(invalidPasswordMsg);
        }
    });
});
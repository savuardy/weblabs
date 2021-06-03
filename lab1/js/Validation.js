const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorExpression = document.getElementById("error");

let count;

function checkPasswordByRegularExpression(regularExpresion, errorDetails) {
    if (password.value.match(regularExpresion) == null) {
        if (count > 0) {
            errorExpression.textContent += " and "
            count = 0;
        }
        errorExpression.textContent += "invalid password (" + errorDetails + ')';
        count++;
    }
    if (confirmPassword.value.match(regularExpresion) == null) {
        if (count > 0) {
            errorExpression.textContent += " and "
            count = 0;
        }
        errorExpression.textContent += "invalid confirm password (" + errorDetails + ')';
        count++;
    }
}

document.getElementById("confirm").addEventListener('click',
    function(){
        let regularForEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        errorExpression.textContent = '';
        count = 0;
        if (regularForEmail.test(email.value) != true) {
            errorExpression.textContent += "invalid email";
            count++;
        }
        checkPasswordByRegularExpression(/[A-Z]/, "no uppercase");
        checkPasswordByRegularExpression(/[a-z]/, "no lowercase");
        checkPasswordByRegularExpression(/[0-9]/, "no num");
        if (password.value.length < 6) {
            if (count > 0) {
                errorExpression.textContent += " and "
                count = 0;
            }
            errorExpression.textContent += "invalid password (no secure)";
            count++;
        }
        if (password.value != confirmPassword.value) {
            if (count > 0) {
                errorExpression.textContent += " and "
                count = 0;
            }
            errorExpression.textContent += "different password & confirm password";
            count++;
        }
        if (count == 0) {
            location.replace("/source/html/user-profile.html")
        }
    })
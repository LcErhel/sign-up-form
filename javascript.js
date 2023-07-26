"use strict"

let pass1 = document.querySelector("#password");
let pass2 = document.querySelector("#passwordConfirm");

let btn = document.querySelector("#registerButton");
let form = document.querySelector("#myForm");

let inform = document.querySelector("#inform");

btn.addEventListener("click", () => {
    if (checkPass() == true) {
        form.submit();
    } else {
        inform.classList.add("visible");
    }
});

function checkPass () {
    if (pass1.value == "" || pass2.value == "") {
        return false;
    }
    return pass1.value == pass2.value ? true : false;
}

console.log(pass1.value);
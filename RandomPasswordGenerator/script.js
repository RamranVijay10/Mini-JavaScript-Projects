
const btn = document.getElementById("btn");
const passwordBox = document.getElementById("password");
const copy = document.getElementById("copy");

const length = 11;

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%^&*()_+";

const all = lowerCase + upperCase + number + symbol;

function generatePassword() {
    let password = "";
    password += all.charAt(Math.floor(Math.random() * all.length));

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * all.length);
        password += all.charAt(random);
    }
    passwordBox.value = password;

}

btn.addEventListener("click", generatePassword);


const copyPassword = () => {
    passwordBox.select();
    document.execCommand("copy");
}

copy.addEventListener("click", copyPassword);
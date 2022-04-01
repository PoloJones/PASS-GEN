//Elements
const btn = document.createElement('button');
const password = document.querySelector('#password');

// Password Data
let characters = '0123456789abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*():"?><';
let passwordLength = 10;
let passwordValue = '';

//Create Password
function createPassword() {
    passwordValue = '';

    for (let i = 0; i < passwordLength, i++;) {
        let number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number, number + 1);
    }

    password.value = passwordValue;
}

//Events
btn.addEventListener('click', createPassword);

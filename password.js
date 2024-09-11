const userNamedBox = document.getElementById("userName");
const passwordBox = document.getElementById("password");

const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
const lowerCase = "abcdefghijklmopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&"

const allchars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let Username = "";
    Username += upperCase[Math.floor(Math.random() * upperCase.length)];
    Username += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Username += number[Math.floor(Math.random() * number.length)];
    Username += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght> Username.length){
    Username += allchars[Math.floor(Math.random() * allchars.length)];
        
    }
    Username += "@gmail.com"
    userNamedBox.value = Username;
}


function anotherFunction(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght> password.length){
    password += allchars[Math.floor(Math.random() * allchars.length)];
        
    }
    // password += "@gmail.com"
    passwordBox.value = password;
}

function copyuserName(){
    userNamedBox.select();
    document.execCommand("copy");

}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

}
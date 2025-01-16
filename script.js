let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvABCDEFGHIJKTMLOP123456789!@#$";
let novaSenha ="";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oniput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";
    for()
}
var lockIcon = document.querySelector(".fa-lock");
var inner = document.querySelector(".inner");
var password = document.querySelector("#myPass");
var state= false;

let text , validIcons, invalidIcons;

function toggle() {
    myFunction();

    if (state) {
        function displayPass() {
            document.getElementById("myPass").setAttribute("type", "password");
        }
        setTimeout(displayPass, 80);
        lockIcon.classList.remove("color-change");
        inner.classList.remove("inner-hover");
        state = false;
    } else {
        function displayText() {
            document.getElementById("myPass").setAttribute("type", "text");
        }
        setTimeout(displayText, 80);
        lockIcon.classList.add("color-change");
        inner.classList.add("inner-hover");
        state = true;
    }
}

function myFunction(){
    var eye = document.querySelector(".eye-closed");
    imgsrc = document.getElementById("img1").src;

    if(imgsrc .indexOf("eye-closed") !=1){
        eye.classList.add("eye-open");
        document.getElementById("img1").src="eye-open.png";
    }
    else{
        eye.classList.remove("eye-open");
        document.getElementById("img1").src="eye-closed.png";
    
    }
}

function textchange(){
    if(password.value.match(/[A-Z]/) !=null)
        valid('capital','fa-check','fa-circle-xmark');
    else
        invalid('capital','fa-check','fa-circle-xmark');


    if(password.value.match(/[0-9]/) !=null)
        valid('number','fa-check','fa-circle-xmark');
    else
        invalid('number','fa-check','fa-circle-xmark');

    if(password.value.match(/[!@#$%^&*]/) !=null)
        valid('special-char','fa-check','fa-circle-xmark');
    else
        invalid('special-char','fa-check','fa-circle-xmark');

    if(password.value.length >=8)
        valid('more-than-8','fa-check','fa-circle-xmark');
    else
        invalid('more-than-8','fa-check','fa-circle-xmark');
}

function valid(item, validIcons, invalidIcons){
    text= document.querySelector(`#${item}`);

    text.style.opacity = "1";
    validIcons = document.querySelector(`#${item} .${validIcons}`);
    validIcons.style.opacity = '1';
    invalidIcons = document.querySelector(` #${item} .${invalidIcons}`)
    invalidIcons.style.opacity = "0";
}

function invalid(item, validIcons, invalidIcons){
    text= document.querySelector(`#${item}`);

    text.style.opacity = "0.5";
    validIcons = document.querySelector(`#${item} .${validIcons}`);
    validIcons.style.opacity = '0';
    invalidIcons = document.querySelector(` #${item} .${invalidIcons}`)
    invalidIcons.style.opacity = "1";
}
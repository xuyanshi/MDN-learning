let myImage = document.querySelector('img')

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === './images/genshin-akihabara.jpg') {
        myImage.setAttribute('src', './images/tachiiri_kinshi.PNG');
    } else {
        myImage.setAttribute('src', './images/genshin-akihabara.jpg');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Input your name:');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
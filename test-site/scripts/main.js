let myImage = document.querySelector('img')

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === './images/genshin-akihabara.jpg') {
        myImage.setAttribute('src', './images/tachiiri_kinshi.PNG');
    } else {
        myImage.setAttribute('src', './images/genshin-akihabara.jpg');
    }
}
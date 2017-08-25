var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mickeysnewyears.jpg') {
      myImage.setAttribute ('src','images/ninas.jpg');
    } else {
      myImage.setAttribute ('src','images/mickeysnewyears.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Writing is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Writing is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
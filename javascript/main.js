var myImage = document.querySelector('img');

myImage.onclick=function() 
{
var MySrc = myImage.getAttribute('src');
if(MySrc === 'images/giorgio.png')
{
    myImage.setAttribute('src', 'images/giorgio-2.png')
}
else 
{
    myImage.setAttribute('src', 'images/giorgio.png')
}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
    var myName = prompt('Please, name yourself');
    localStorage.setItem('name', myName);
    myHeading.textContent = "His name is Giovani Georgio, " + myName;
}

if (!localStorage.getItem('name'))
{
    setUserName();
}
else 
{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "His name is Giovani Georgio, " + storedName;
}

myButton.onclick = function()
{
    setUserName();
}
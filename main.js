var myHeading = document.querySelector('h1');
myHeading.textContent = 'Kabipi Group of Companies Ltd';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bike.jpg') {
      myImage.setAttribute ('src','images/car.jpg');
    } else {
      myImage.setAttribute ('src','images/bike.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');// this takes references to the new button and the heading, storing them inside variables:

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Kabipi Group of Companies Ltd, ' + myName; /*This function contains a prompt() function, which brings up a dialog box, a bit like alert().
 This prompt(), however, asks the user to enter some data, storing it in a variable after the user presses OK. 
In this case, we are asking the user to enter their name. Next, we call on an API called localStorage, which allows us to store data in the browser and later retrieve it. W
e use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the data the user entered. 
Finally, we set the textContent of the heading to a string, plus the user's newly stored name.*/
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Kabipi Group of Companies Ltd, ' + storedName; /*This block first uses the negation operator (logical NOT, represented by the !) 
to check whether the name data exists. If not, the setUserName() function is run to create it.
 If it exists (that is, the user set it during a previous visit), 
we retrieve the stored name using getItem() and set the textContent of the heading to a string, plus the user's name, as we did inside setUserName().*/
}

myButton.onclick = function() {
  setUserName(); /*Finally, put the below onclick event handler on the button. When clicked, the setUserName() function is run. 
This allows the user to set a new name, when they wish, by pressing the button:*/
}
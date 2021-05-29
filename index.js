// var greetingString = "Good morning";
// var username = "Frank Choongsaeng";

// // string concatenation: with the + operator
// var concatenatedString = greetingString + " - " + username;

// // string concatenation: using string concat method
// var concatenatedString2 = greetingString.concat(" ", username, ".", "How are you doing today?");

// // string concatenation: using string literals (backticks)
// var concatenatedString3 = `${greetingString} ${username}. How are you doing today?`;


// /**
//  * LOOPS
//  *  - loops are a way of repeating a certain action a number of times
//  *  - they are useful for completing an iterative task 
//  */

// var specialElements = document.getElementsByClassName("special");

// console.log(specialElements)


// // for loop
// for(var step = 0; step < specialElements.length; ++step) {
//   // loop body

//   var text = specialElements[step].innerText;

//   if(text == "Special 1" || text == "Special 4" || text == "Special 6") {
//     // condition body
//     specialElements[step].innerText += " edited"
//   }
// }

// alert(concatenatedString3)












































// // EVENT LISTENERS

// function alertHandler() {
//   alert("The button was clicked")
// }

// var alertButton = document.getElementById("show-alert"); 
// alertButton.addEventListener('click', alertHandler)













































// // ACTIONS
// function addPadding(elementId) {
//   document.getElementById(elementId).style.padding = "40px";
// }

// function changeContent(elementId) {
//   document.getElementById(elementId).innerText = "This is some new content";
// }

// function changeColor(elementId) {
//   document.getElementById(elementId).style.backgroundColor = "lightgreen";
// }

// // HANDLERS
// function handler1() {
//   addPadding("element1")
// }

// function handler2() {
//   changeContent("element2")
// }

// function handler3() {
//   changeColor("element3")
// }

// var changeColorBtn = document.getElementById("change-color");
// var changeContentBtn = document.getElementById("change-content");
// var addPaddingBtn = document.getElementById("add-padding");


// changeContentBtn.addEventListener('click', handler2)

// addPaddingBtn.addEventListener('click', handler1)

// changeColorBtn.addEventListener('click', handler3)























// const image = document.getElementById("image"); // image element
// const enlarge = document.getElementById("enlarge"); // enlarge button
// const reset = document.getElementById("reset"); // reset button
// const shrink = document.getElementById("shrink"); //shrink button

// // Enlarge Handler & Event
// function enlargeImage() {
//   image.style.width = "400px"
//   image.style.height = "400px"
// }

// enlarge.addEventListener('click', enlargeImage)


// // Reset Handler & Event
// function resetImage() {
//   image.style = ""
// }

// reset.addEventListener('click', resetImage)


// // Shrink Handler & Event
// function shrinkImage() {
//   image.style.width = "100px";
//   image.style.height = "100px";
// }

// shrink.addEventListener('click', shrinkImage)







































/**
 * 
 * IF STATEMENTS
 * 
 * - If statements in Javascript is a way of choosing an action to take 
 * - based on what conditions were satisfied
 *  
 * */ 

var person_name = "Mike";
var person_age = 16;
var person_nationality = "Ghanaian";

if(person_age  >= 18 && person_nationality == "Ghanaian") {
  // Do what ever is in here
}















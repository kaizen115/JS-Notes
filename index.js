// --------------------------------------------------------------------------
// ACCEPTING USER INPUT: 
// --------------------------------------------------------------------------
/*

let username;

document.getElementById("myButton").onclick = function(){

    username =  document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}

*/
// --------------------------------------------------------------------------
// TYPE CONVERSION: 
// --------------------------------------------------------------------------
/*

// typeof lists the datatype

let age = window.prompt("How old are you?");

age = Number(age)
age += 1;

console.log("Happy Birthday! You are", age, "years old");

*/
// --------------------------------------------------------------------------
/*

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

*/
// --------------------------------------------------------------------------

// const = A VARIABLE THAT CAN'T BE CHANGED - IMPORTANT FOR SET IN STONE DATA
// COMMON NAMING CONVENTION FOR CONSTANTS IS UPPERCASE

// --------------------------------------------------------------------------
// WITHOUT CONSTANTS:
// --------------------------------------------------------------------------
/*

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;
console.log("The circumference is:", circumference)

*/
// --------------------------------------------------------------------------
// WITH CONSTANTS:
// --------------------------------------------------------------------------
/*

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

PI = 420.69; // ATTEMPTING TO CHANGE PI VALUE - RESULTS IN TYPE ERROR DUE TO CONST

circumference = 2 * PI * radius;
console.log("The circumference is:", circumference);

*/
// --------------------------------------------------------------------------
// MATH -  An intrisic object that provides basic mathematics functionality and constants
// --------------------------------------------------------------------------
/*

// ROUNDING:

let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

x = Math.round(x); // Rounded
x = Math.floor(x); // Rounded DOWN
x = Math.ceil(x); // Rounded UP
x = Math.pow(x,2); // Raise the value to a given power
x = Math.sqrt(x); // Finds the square root
x = Math.abs(x); // Finds the absolute value - The distance away from 0
maximum = Math.max(x, y, z); // Maxiumum of the 3 values
minimum = Math.min(x, y, z); // Minimum of the 3 values
x = Math.PI; // Displays the value of PI 

console.log(x); 

*/
// --------------------------------------------------------------------------
// Pythagorean Theorem - Finding the hypotenuse of a right-angled triangle
// --------------------------------------------------------------------------
/*

let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);
// CAN ALSO BE WRITTEN LIKE:
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C:", c);

*/
// --------------------------------------------------------------------------
// ^ SAME LOGIC BUT CONNECTED TO HTML TO DISPLAY ONTO PAGE ^
// --------------------------------------------------------------------------
/*

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;

    console.log("Side C:", c);
}

*/
// --------------------------------------------------------------------------
// SIMPLE COUNTING PROGRAM
// --------------------------------------------------------------------------
/*

let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

*/
// --------------------------------------------------------------------------
// Random Number Generator
// --------------------------------------------------------------------------
/*

 // prints a random number between set limits, floor to round down & + 1 to match ceiling as it starts at 0

 let x;
 let y;
 let z;

document.getElementById("rollBtn").onclick =  function() {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}

*/
// --------------------------------------------------------------------------
// Useful String Properties & Methods
// --------------------------------------------------------------------------
/*

let userName = "Kain"
console.log(userName.length); // Prints the length of the variable
console.log(userName.charAt(0)); // Prints the character at the given index of the string
console.log(userName.indexOf("a")); // Prints the index of the first occurance of the given character
console.log(userName.lastIndexOf("a")); // Prints the index of the last occurance of the given character

userName = userName.trim(); // Trims any extra spaces of text in a variable
userName = userName.toUpperCase(); // Prints the variable in upper case
userName = userName.toLowerCase(); // Prints the variable in lower case

console.log(userName);

// --------------------------------------------------------------------------

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "/"); // first input is what you would like to replace, 2nd input is what you'd like to replace it with - can leave 2nd input empty.

console.log(phoneNumber);

*/
// --------------------------------------------------------------------------
// SLICE - Extracts a section of a string and returns it as a new string, without modifying the original string.
// --------------------------------------------------------------------------
/*

let fullName = "Snoop Dogg";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

*/
// --------------------------------------------------------------------------
// Method Chaining - calling one method after another in one continious line of code
// --------------------------------------------------------------------------
/*

let userName = "Gav";

// let letter = userName.charAt(0);
// letter = letter.toUpperCase(); // instead of 2 lines, you could consolidate into one and chain methods continiously

let letter = userName.charAt(0).toUpperCase();

console.log(letter);

*/
// --------------------------------------------------------------------------
// If statement - A basic form of decision making - if a condition is true, then do something, if not, then don't do it.
// --------------------------------------------------------------------------
/*

let age = 65;

if (age >=65) {
    console.log("You are a senior citizen");
}
else if(age >= 18){
    console.log("You are an adult");
}
else if (age < 0){
    console.log("You haven't been born yet")
}
else {
    console.log("You are a child");
}

// --------------------------------------------------------------------------
CHECKING BOOLEAN VALUES
// --------------------------------------------------------------------------

let online = false;

if (online) {
    console.log("You are online");
}
else {
    console.log("You are offline");
}

*/
// --------------------------------------------------------------------------
// Checked Property (following checkbox or radio button with .checked)
// --------------------------------------------------------------------------
/*

// CHECKBOX

document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");

    if(myCheckBox.checked){
        console.log("You are subscribed");
    }
    else {
        console.log("You are not subscribed");
    }

// --------------------------------------------------------------------------
// RADIO BUTTONS

    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(visaBtn.checked){
        console.log("You are paying with Visa");
    }
    else if(mastercardBtn.checked){
        console.log("You are paying with Mastercard");
    }
    else if(paypalBtn.checked){
        console.log("You are paying with Paypal");
    }
    else {
        console.log("You must select a payment type");
    }
}

*/
// --------------------------------------------------------------------------
// Switch - Statement that examines a value for a match against many case clauses. More effecient than many "else if" statements.
// --------------------------------------------------------------------------
/*

let grade = 90;

switch(true){
    case grade >= 90:
        console.log("You did great");
        break;
    case grade >= 80:
        console.log("You did good");
        break;  
    case grade >= 70:
        console.log("You did okay");
        break; 
    case grade >= 60:
        console.log("You passed");
        break;
    case grade <= 59:
        console.log("You failed");
        break;
    default:
        console.log(grade, "is not a grade");
}

*/
// --------------------------------------------------------------------------
// LOGICAL OPERATORS - Gives the ability to check more than one condition concurrently 
// && = AND (ALL conditions must be true)
// || = OR (Either condition can be true)
// --------------------------------------------------------------------------
/*

// && AND

let temp = 65;
let sunny = false;

if(temp > 50 && temp < 90 && sunny){
    console.log("The weather is good");
}
else{
    console.log("The weather is bad");
}


// -------------------------------------------------------------------------- 

// || OR

let temp = 55;

if(temp <= 50 || temp >= 90){
    console.log("The weather is bad");
}
else{
    console.log("The weather is good");
}

*/
// --------------------------------------------------------------------------
// LOGICAL OPERATOR - 
// ! = NOT - Typically used to reverse a conditions boolean value (true -> false and vice versa)
// --------------------------------------------------------------------------
/*

let temp = 40;

if(!(temp > 65)) {
    console.log("It's cold outside");
}
else {
    console.log("It's warm outside");
}

// --------------------------------------------------------------------------

let sunny = true;

if(!sunny) {
    console.log("It's sunny outside");
}

else {
    console.log("It's cloudy outside");
}

*/
// --------------------------------------------------------------------------
// WHILE LOOP - Repeat some code while the condition is true (potentially infinitely)
// Generally better for when you need to repeat continiously
// --------------------------------------------------------------------------
/*

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name")
}

console.log("Hello", userName);

*/
// --------------------------------------------------------------------------
// DO WHILE LOOP - Do something, then check the condition, repeat if the condition is true
// --------------------------------------------------------------------------
/*

do  {
    userName = window.prompt("Enter your name");
} while (userName == "")

console.log("Hello", userName);

*/
// --------------------------------------------------------------------------
// FOR LOOPS - Repeat some code a certain amount of times
// More suitable for repeating code a CERTAIN number of times
// --------------------------------------------------------------------------
/*

for (let i = 10; i > 0; i -=1) { // Starts at ten, ends at 1, by a factor of 1
    console.log(i);
}
console.log("Countdown Finished");

*/
// --------------------------------------------------------------------------
// Break = Breaks out of a loop entirely
// Continue = skip an iteration of a loop
// --------------------------------------------------------------------------
/*

// BREAK - Stops at given point

for (let i =1; i<=20; i+=1){
    if(i == 13){
        break; 
    }

// --------------------------------------------------------------------------

// CONTINUE - SKIPS given point

for (let i =1; i<=20; i+=1){
    if(i == 13){
        continue; 
    }
    console.log(i);
}

*/
// --------------------------------------------------------------------------
// NESTED LOOP = A loop inside of another loop
// --------------------------------------------------------------------------
/* 

let symbol = window.prompt("Enter a symbol to use");
let rows =  window.prompt('Enter a # of rows');
let columns = window.prompt('Enter a # of columns');

for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= columns; j+=1){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}

*/
// --------------------------------------------------------------------------
// FUNCTIONS - Define code once, and use it many times
// To perform some code, call the function name
// --------------------------------------------------------------------------
/*

startProgram();

function startProgram(){
    let userName = "Asahel";
    let age = 19

    happyBirthday(userName, age); // To pass values or variables to a function, match your parameters in the function parentheses - otherwise the function will not recognize them
}

function happyBirthday(a, b){ // Matching parameters / shortened the arguments to "a" and "b"
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log("Happy birthday dear", a);
    console.log("Happy birthday to you");
    console.log("You are", b, " years old");
}

*/
// --------------------------------------------------------------------------
// RETURN - returns a value back to the place where you invoked the function
// --------------------------------------------------------------------------
/*

let area;
let width;
let height;

width = window.prompt("Enter Width");
height = window.prompt("Enter Height");

area = getArea(width, height);

console.log("The area is:", area);

function getArea(width, height){
    return width * height;
}

*/
// --------------------------------------------------------------------------
// Ternary operator -  Shortcut for an if/else statement
// Takes 3 operands - 1. a condition with ?  2. expression if true  3. expression if false
// Condition ? exprIfTrue : exprIfFalse
// --------------------------------------------------------------------------
/*

 let adult = checkAge(19);
 console.log(adult);

 function checkAge(age){
    return age >= 18 ? true : false;
 }

 // --------------------------------------------------------------------------

 checkWinner(true);

 function checkWinner(win){
    win ? console.log("YOU WIN!") : console.log("YOU LOSE");
 }

 */
// --------------------------------------------------------------------------
// VARIABLE SCOPE - Where a variable is accessible

// let = variables are limited to a block scope {}
// var = variables are limited to a function (){}

// Global variable = is declared outside any function
// (if global, var will CHANGE your browser's window properties)
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// Template literals = delimited with (`)
//                     instead of double or single quotes
//                     allows embedded variables and expressions
// --------------------------------------------------------------------------
/*

INSTEAD OF THIS:

userName = "Bro";
let items = 3;
let total = 75;

console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total);

console.log(`Hello ${userName}`);
console.log(`You have ${items} in your cart`);
console.log(`Your total is $${total}`);

// --------------------------------------------------------------------------
// IT'S THIS:

let userName = "Bro";
let items = 3;
let total = 75;

let text = 
`Hello ${userName}
You have ${items} in your cart
Your total is $${total}`;

console.log(text);

*/
// --------------------------------------------------------------------------
// toLocacleString() - returns a string with a language sensitive representation of this number
// number.toLocaleString(locale, {options});
// 'locale' - specify that language (undefined - default set in browser)
// 'options' = object with formatting options
// --------------------------------------------------------------------------
/*

let myNum = 100

myNum = myNum.toLocaleString("en-US"); // US English
myNum = myNum.toLocaleString("hi-IN"); // Hindi
myNum = myNum.toLocaleString("de-DE"); // Standard German

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); // USD
myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); // Rupees
myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"}); // Euros

myNum = myNum.toLocaleString(undefined, {style: "percent"}); // 1 = 100%

myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"}); // Celsius / KG / Etc

console.log(myNum);

*/
// --------------------------------------------------------------------------
// NUMBER GUESSING GAME
// --------------------------------------------------------------------------
/*

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {
    let guess = document.getElementById("guessField").value
    guesses += 1;

    if(guess == answer){
        alert(`${answer} is the #. It took you ${guesses} guesses`);
    }

    else if(guess < answer) {
        alert("Too small!");
    }
    else {
        alert("Too large!");
    }
}

*/
// --------------------------------------------------------------------------
// Temperature Conversion Program
// --------------------------------------------------------------------------

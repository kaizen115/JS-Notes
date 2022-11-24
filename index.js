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

do  {
    userName = window.prompt("Enter your name");
} while (userName == "")

console.log("Hello", userName);
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


let fullName = "Snoop Dogg";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
console.log("Hello World")
console.log("Areeba Shakeel")
console.log("This is my first JS code")

console.log("----------------------")

// Types of variables
// 1. var
// 2. let
// 3. const

var name = "Areeba"
console.log(name)

// difference between let and const
// let variable
let age = 10
console.log(age)
// Value of variable can be changed
age = 20 
console.log("Now i am", age, "years old")

// const variable
// Value of variable can not be changed
// const dob = 1995
// console.log(dob)

// dob = 1998
// console.log(dob)

console.log("----------------------")

// Difference between var and let
var a = 10;
var a = 20;
// Redeclaration is possible
console.log(a) 

a = 30;
// Reassignment is possible
console.log(a)

let b = 10;
// Redeclaration is not possible
// let b = 20;
// Reassignment is possible
b=20;
console.log(b)

console.log("----------------------")

let firstName = "Varun";
let lastName = "Dhawan";
console.log(firstName + " " + lastName)

let bs = 30000;
let hra = (10/100) * bs;
let da = (5/100) * bs;
let gs = bs + hra + da;
console.log("Gross Salary is", gs)
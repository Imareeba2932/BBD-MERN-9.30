// Conditional Statements
// if (to check the single or multiple condition)
// if else (to check the single condition)
// if-else-if (to check the multiple condition)
//  Ternary Operator (to check the single condition)

let age =19;
if (age >= 18) {
    console.log("You are eligible for voting")
} 

console.log("--------------------")

let age1 = 17;
if (age1 >= 18) {
    console.log("You are eligible for voting")
} else{
    console.log("You are not eligible for voting")
}

console.log("--------------------")

let marks = 80;
if (marks >= 90) {
    console.log("A+🎊")
} else if (marks >= 80) {
    console.log("A😁")
} else if (marks >= 70) {
    console.log("B😒")
}else {
    console.log("Need Improvement👍")
}

console.log("--------------------")

let a = 20;
let result = (a > 10) ? "Greater than 10" : "Less than 10";
console.log(result)
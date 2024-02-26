let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits.slice(1,3));
console.log(fruits.slice(2));

console.log('------------------ARRAY FUNCTIONS-----------------------')
// push() - add element at the end of the array
// pop() - remove element from the end of the array
// shift() - remove element from the start of the array
// unshift() - add element at the start of the array
// indexOf() - find the index of the element
// concat() - merge two arrays
// forEach() - iterate through the array
// map() - iterate through the array and return new array
// filter() - filter the array based on condition

fruits.push("Grapes");
fruits.pop();
fruits.shift();
fruits.unshift("Kiwi");
console.log(fruits);

let fruits2 = ["Watermelon", "Papaya", "Guava"];
newArray = fruits.concat(fruits2);
console.log(newArray);

let num = [1,2,3,4,5,6,7,8,9,10];
num.forEach(function(num){
    console.log(num);
})

console.log("----------------------------")
num.forEach((num) => {
    console.log(num**2);
})

console.log("-------------USING LOOPS---------------")
number = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < number.length; i++){
    console.log(number[i]**3);
}

console.log("-------------USING FOREACH FUNCTION---------------")
number.forEach((x) => {
    console.log(x**3);
})

console.log("-------------USING MAP FUNCTION---------------")
let newNumber = number.map((x) => x**3);
console.log(newNumber);

// Using for loop
a=[1,2,3,4,5,6,7,8,9,10];
b=[];
for (let i = 0; i < a.length; i++){
    b.push(a[i]**3);
}
console.log(a);
console.log(b);

console.log("-------------USING FILTER FUNCTION---------------")
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let eveNum = [];
for (let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0){
        eveNum.push(array[i]);
    }
}
console.log(eveNum);

let evenNum = array.filter((num) => num % 2 == 0);
console.log(evenNum);

let color = ["Red", "Green", "Blue", "Yellow", "Orange", "Pink", "Purple"];
let color2 = color.filter((clr) => clr.length>4);
console.log(color2);
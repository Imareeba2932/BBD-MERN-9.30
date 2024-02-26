let student = {
    name : "John",
    age : 25,
    email : "john123@gmail.com",
    password : "john@123",
    mobile : 1234567890,
}
console.log(student);

// Accessing the object properties
console.log(student.age);
console.log(student["age"]);
console.log(student.name);

// replacing the value
student.password = "abrakadabra";
console.log(student);

// Adding new properties
student.address = "New York";
console.log(student);

console.log("--------------------");

const smartphones = {
    "brand" : "Samsung",
    "model" : "Galaxy",
    "color" : ["Black", "White", "Blue", "Red", "Green", "Yellow", "Pink"],
    "price" : 20000,
    "camera" : "48MP",
    "battery" : "5000mAh",
}
console.log(smartphones);
console.log(smartphones.color[2]);
smartphones.color[2] = "SkyBlue";
console.log(smartphones);


const phones = [
    {brand : "Samsung", model : "Galaxy", color : ["red","blue","white",], price : 20000, camera : "48MP", battery : "5000mAh"},
    {brand : "Apple", model : "iPhone", color : ["red","blue","white",], price : 50000, camera : "48MP", battery : "5000mAh"},
    {brand : "OnePlus", model : "Nord", color : ["red","blue","white",], price : 30000, camera : "48MP", battery : "5000mAh"},
];
console.log(phones[1].color[2]);
// Primitive types
// In primitive data type the orignal does not change 
// E.g

let primitive = "Test message";
let primitiveTwo = primitive;
primitiveTwo = "Test message two"

// There are 7 types  of that i known they are
// Strint , Number , Boolearn , null , undefined , Symbol , BigInt

const id = Symbol(123);
const anotherId = Symbol(123);
//Symbol is used to show uniqe number and string
//exmaple id of student in the school

console.log(id === anotherId);

const BigInt = 3405456666777888669n

console.log(BigInt);

// Reference type (Non primitive)
// In this data type the orignal values are also change
//e.g

let referenceValues = {
    Name : "Adam",
    email : "Adam343@gmail.com"
}

let newEmail = referenceValues; 
newEmail.email = "dmo342@gmail.com"

console.log(referenceValues.email);
console.log(newEmail.email);

// In this example the value of email is also change when we change the value of newEmail 

// Array , Function , Odjects
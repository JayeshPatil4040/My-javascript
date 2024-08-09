const Username = "Alex";
let age = 20;

// console.log(Username + age  ) 
//we should avoide to use this type of sentext because this syntax is out dateded

// We should use this type  of syntax 

// console.log(`Username is ${Username} and age is ${age}`);

// With using this syntax we also use methods

// console.log(`Username is ${Username.toUpperCase()} and the user age ${age}`);

// There is another method to decealer the string that is 

let UserId = new String("UI43439493");

// console.log(UserId.__proto__);

// console.log(UserId.length);
// console.log(UserId.charAt(5));
// console.log(UserId.toLowerCase(0,2));

console.log(Username.substring(0,2));
console.log(Username.substring(-4,2));

console.log(Username.slice(0,2))
console.log(Username.slice(-4,2));

let url = "https://jayesh%0patil.com";
// console.log(url);
// console.log(url.replace('%0','.'))
// console.log(url.includes("good"))

let usetrim = "    jayesh    ";
// console.log(usetrim);
// console.log(usetrim.trim());

let converArray = "jayesh-patil-19"
// split converts a strings into a array 
let converedArray = converArray.split("-")
// console.log(converedArray)
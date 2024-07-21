// This is an singleton object 
let creatlObj = new Object()

// This is nonsingleton odject 
let Password = Symbol("Password")
let myObj = {
    Name : "Alex",
    LastName : "Panden",
    Age : 23,
    IsMarried : true,
    Address : {
        City : "Mumbai",
        State : "Maharashtra"
    },
    Email : "panden@.com",
    [Password] : "12345",
    Phone : "1234567890",
    PaymentResponse : "Success"
} 


console.log(myObj.Address.City)
console.log(myObj[Password])

 myObj.SayHello = function(){
    console.log("Hello")
}

myObj.getName = function(){
    console.log(`Your name is ${myObj.Name} ${myObj.LastName}`) // alert(myObj.Name)
    console.log(`My city is ${myObj.Address.City} and state is ${myObj.Address.State}`)
}

console.log(myObj.getName());
console.log(myObj.SayHello());
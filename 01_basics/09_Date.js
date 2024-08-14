//Date 

let getDate = new Date();
// console.log(getDate.toISOString());
// console.log(getDate.toJSON());
// console.log(getDate.toDateString());
// console.log(getDate.toLocaleDateString());
// console.log(getDate.toLocaleTimeString());
// console.log(getDate.toTimeString());
// console.log(getDate.toUTCString());

// let NewDate = new Date(2024 , 1 , 23)
// console.log(NewDate.toLocaleDateString());

// let NewDate = new Date(2024 , 1 , 23 , 5 ,45 ,9 )
// console.log(NewDate.toLocaleString());

// let NewDate = new Date("2024-01-14" )
// console.log(NewDate.toLocaleString());

// let NewDate = new Date("01-14-2024" )
// console.log(NewDate.toLocaleString());

let stampDate = Date.now()
console.log(stampDate);
console.log(getDate.getTime());
console.log(Math.floor(Date.now()/1000));

let comDate = new Date()
console.log(comDate.toLocaleString("default",{
    weekday: "long",
    day : "numeric"
}));








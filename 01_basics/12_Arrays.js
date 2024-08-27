
    let Array1 = ["Jayesh", "Patil", "Mumbai", "Maharashtra", "India"];
    let Array2 = ["Alex", "Panden", "Mumbai", "Maharashtra", "India"];

//    Array1.push(Array2)
//    console.log(Array1);

   let Array3 = Array1.concat(Array2)
   console.log(Array3);

   let newArray = [1 ,3,4,[56,66],8,9,[5,6,7],5,[90]]
   console.log(newArray.flat(Infinity));
   
   console.log(Array.isArray('Jayesh'));
   console.log(Array.from('Jayesh'));
   console.log(Array.from({name: "Jayesh"}));

   let value1 = 100
   let value2 = 200
   let value3 = 300

   console.log(Array.of(value1, value2, value3));
   
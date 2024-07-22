  //  Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

  let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

delect = delete student.rollno;
console.log(student);

//Write a JavaScript program to get the length of object

let CreateaNewObject = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}

let getLength = Object.keys(CreateaNewObject).length;
console.log(getLength);
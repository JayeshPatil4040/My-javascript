// Javascript arrays are resizeble and they content mix of different data types
//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes.
//JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1.
//Javascript arrays copy operation creates a SHELLOW COPY rather than DEEP COPY
// 1) : Shellow copy - Shellow copy means any changes we make in orignal array it will also change orignal array.
//2)  : Deep copy - Deep copy means any changes we make in orignal array it will not change the orignal array


// Arrays Mathods 

let creatArrays = [1,23,9,45,65,5]
//creatArrays.push(2) // Add One number or Element in the array
//creatArrays.pop() //Removes the last array

creatArrays.includes(5)
console.log(creatArrays.includes(5));
console.log(creatArrays.indexOf(5));
console.log(creatArrays.join()) // Convert into the string
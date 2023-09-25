// Arrays


// Heap
const myArr = [0,1,2,3,4,5];
const myfruit = ['mango','Apple','Bannan'];

const newArr = new Array(1,2,3,4)

//  myArr.push(8)  // ADD in last  | add on 8
//  myArr.pop()    // remove in last   | remove 8

// myArr.unshift(9)   // add in start | add 9
//myArr.shift()         // remove in start 9

// console.log(myArr.includes(9)); // boolean
// console.log(myArr.indexOf(5));  // check exist  | => not in array to show-1

//console.log(myArr.join()); // convert to string

// slice, splice
console.log("orginal :",myArr);

// slice
const myNum1 = myArr.slice(1,3) // remove start 1 to 2 | last charater not remove
console.log("Slice",myNum1);
console.log("orginal :",myArr);

// splice

const myNum2 = myArr.splice(1,3) // remove start 1 to 3 
console.log("slice",myNum2);
console.log("orginal :",myArr); // remove the elemnt in 1 to 3 in orignal array

// console.log(myArr);
// console.log(myfruit);


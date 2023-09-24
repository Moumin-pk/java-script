// Question:
// ✅Is JavaScript a statically or a dynamically typed language?
// ⭐javascript is dyanmeic type language but type script is static type language?
   // 👋Dynamic type language all type checks e.g string, number, boolean etc . are performed in a runtime.

// premitive => 7 types
// string , number , boolean , null, undefined, symbole, bigInt

let name = 'Moumin'; // string
let num = 13; // number
let userLogin = true;  //  => false | bolean 
let Null = null; // unll  👋 type of => 🔥object 
let userData; // undefine

// type of => is use to define dataType
//symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // its false 

// Refrence(Non-Premtive)
// Array, object , Function

var fruit = ['Apple', 'Banan','Orange','Mango']   // its call an array

const obj = {
    Name: ' moumin',
    age : 12,
     class: 10,
}   // its call an object

const myFuction = function ()
{
    console.log("its functiomn");
}
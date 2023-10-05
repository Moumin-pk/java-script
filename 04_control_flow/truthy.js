//let userloggedin = ''  => without space isfalse 
//let userloggedin = '0'; => truty
//let userloggedin = 'false';  => truty
//let userloggedin = ' '; => its true
//let userloggedin = {}; => true
//let userloggedin = []; => true
// function(){}  // true

// false

//let userloggedin = ''; => false
//let userloggedin = false; => false
//let userloggedin = 0 ; // false
//let userloggedin = -0; => false
// bigint , null, undefine, NaN
//let userloggedin = 0n; //false


// if (userloggedin) {
//     console.log(`user is logged in`);
// }

let useremail = '';
if (useremail.length === 0) {
    console.log(`array is empty`);
}

// object
 
let empobject = {};
if (Object.keys(empobject).length === 0) {
    console.log(`empty Object`);
} else {
    
}

// its true
// =>  false == 0
// =>  false == ''
// =>  0 == ''
// =>  

// nuillish coalescing Operater (??): null undefined
// its use for null or undefined

let val1;
// val1 = 10 ?? 5;
//val1 = null ?? 20;
//val1 = undefined ?? 30;
val1 = null ?? 20 ?? 40;
console.log(val1);

// ternary operater

const icecreamPrice = 80;
icecreamPrice >= 79 ? console.log(`price is less than 80`)  : console.log(`price is greater ta 80`);;
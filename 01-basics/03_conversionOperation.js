var score = "33cvbn";

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN 

//conversion
// 33 => 33
// 33abc => nan
// true => 1


//boolean 
let isLoggedIn = "moumin"; // onvert Boolean
console.log('isLoggedIn => '+ typeof(isLoggedIn));
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log('booleanIsLoggedIn => '+ typeof(booleanIsLoggedIn));

//conversion
// 1 => true | 0 => false
// "" => false
// "a-z" => true | boolean

// string
let num = 33;
console.log("num => "+typeof(num));
let convertstring = String(num);
console.log('convertstring => '+typeof(convertstring));



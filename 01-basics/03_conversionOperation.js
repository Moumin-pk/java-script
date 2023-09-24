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

/**** Operater ****/

let value = 5;
let negValue = -value;
console.log(negValue);

console.log(2+2); // addidtion
console.log(2-2); // substraction
console.log(2*2); // multiplication
console.log(2**3); // power
console.log(2/3); // addidtion
console.log(2%3); // reminder


let fName = 'Moumin';
let lName = 'Ahmad';
let firstLastName =fName + lName;
console.log(firstLastName);

console.log('1'+2);  // 12
console.log('1'+2);  // 21
console.log("1"+2+2); // 122
console.log(1+2+'2'); //32
console.log(+true); // 1
console.log(+""); // 0

//practice  =>
// increment(++)

// postfix increment
let x = 2;
let y = x++
console.log('postfix => '+ 'x = '+x+' y = '+y);

// prefix increment

let a =2;
let b = ++a;
console.log('postfix => '+ 'a = '+a+' b = '+b);


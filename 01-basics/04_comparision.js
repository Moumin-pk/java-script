
console.log(2 > 1); //true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log( 2 == 1); // false
console.log( 2 != 1); // true

console.log('2' > 1);   // true 
console.log('02' > 1);   // true

// avoid 
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined < 0); // false

// ===  check datatype or value

console.log('2' === 2); // false
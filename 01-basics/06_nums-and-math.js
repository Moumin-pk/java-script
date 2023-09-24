let score = 400;
console.log(score); // 400

let num = new Number(100);
console.log(num); //[Number: 100]
console.log(num.toString().length); //3
console.log(num.toFixed(2)); 100.00

let num1 = 345.33
console.log(num1.toPrecision(3));

let hundered = 100000000;
console.log(hundered.toLocaleString('en-PK'));

// ************* Maths **************

// abs | => only - value to convert positive

console.log(Math.abs(-13)); // 13
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.min(4.6,5.6,9.0,8.8)); // 4.6
console.log(Math.max(4.6,5.6,9.0,8.8)); // 9

// random
console.log(Math.random()*10);

// random + round
console.log(Math.round(Math.random()*10000));

// random + floor
console.log(Math.floor(Math.random()*100));

//min + max

const min =10;
const max =20;

// important concept
console.log(Math.floor((Math.random() * (max - min +1)) + min));


let name = 'moumin';
let repCount = 50;

console.log(`my name is : ${name} my repo in gitHub : ${repCount}`);

const gamename = new String('Gta-five');
console.log(gamename[4]);

console.log(gamename.length); // character length
console.log(gamename.charAt(6));  // nummber of character in location 
console.log(gamename.toUpperCase());
//character convert to upercase
console.log(gamename.indexOf('f'));
//find character 

// substring
const newString = gamename.substring(0,4) // Gta-
console.log(newString);
// slice
const anotherString = gamename.slice(-8,5); //gta
console.log(anotherString);

// trime |=> remove space 
var newStringOne = '   moumin    ';
console.log(newStringOne);
console.log(newStringOne.trim());

// replace the character
const url = 'https://demin.com/moumin%20choudhary'
console.log(url.replace('%20','-'));
console.log(url.includes('moumin'));
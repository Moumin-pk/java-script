
// Array specfic loop
//["","",""]
//[{},{},{}]

// for of
let arr = [1,2,3,4,5,6,7]
for (const num of arr) {
    console.log(`Number => ${num}`);
}

// for of
const greeting = 'SEHAR';
for (const greet of greeting) {
    console.log(`each character => ${greet}`);
}

// Map use for uniqe 
const map = new Map()
map.set('PK', 'Pakistan')
map.set('US', 'United States of America')
map.set('FR', 'France')

console.log(map);

for (const [key, value] of map) {
    console.log(key, '=>' ,value);
}


// object not work for of loop
const valu = {
    Name : 'moumin',
    class : '10th'
}
for (const id of valu) {
    console.log(id);
}
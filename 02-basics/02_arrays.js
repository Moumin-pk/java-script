let fruit = ["Apple","Bannan","Mango","Orange"]
let vegitable = ["patato","carrot"]

// fruit.push(vegitable) // store array ka andar array store karta ha
// console.log(fruit);
// console.log(fruit[4]);

// concat
console.log(fruit.concat(vegitable));

// spread
const allNewHero = [...fruit, ...vegitable]
console.log(allNewHero);

// concat or spread work like it same
 let newData = [1,23,4,5,6,[2,3,5,6,[2,4,6,7],7,8]]
 console.log(newData.flat(Infinity));  // flat marge multiple array in one array

 console.log(Array.isArray("Mpumin"));
 console.log(Array.from("moumin")); // from convert string to Array

 let score1 = 200
 let score2 = 400
 let score3 = 600

 console.log(Array.of(score1,score2,score3)); // convert to array
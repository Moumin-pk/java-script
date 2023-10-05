
// for loop
for(let index = 0 ; index <= 10; index++){
    let element = index;
    if(element == 5){
        console.log(`5 is best number✅`);
    }
    console.log(element);
}

// nested loop
// for(let i = 1 ; i <= 10; i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j = 1 ; j <= 10; j++){
//         //console.log(`inner loop value ${j} and inner loop ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

let myArray = ['moumin','hassan','muhaiman','sehar'];
for(let i = 0;i < myArray.length; i++){
    const elem = `${i} => ${myArray[i]}`
    console.log(elem);
}

// break and continue

for(let i = 10; i<=20; i++){
    if(i == 15){
        console.log(`value is : ${i}`);
        break;
    }
    console.log(`value of i is: ${i}`);
}
for(let i = 10; i<=20; i++){
    if(i == 15){
        console.log(`Dedact value is : ${i}`);
        continue;
    }
    console.log(`value of i is: ${i}`);
}
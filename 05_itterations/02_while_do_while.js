
// while
let index = 0 ;
while (index <= 10) {
    console.log(`value of index = ${index}`);
    index = index+2;
}

// array use in while
let myArray = [`moumin`,`hassan`,`ali`,`sehar`];
let arr = 0;
while (arr < myArray.length) {
    console.log(`array length: ${myArray[arr]}`);
    arr++;
}

// do while
// mest exectue one
let score =1;

do {
    console.log(`your score is ${score}`);
    score++;
} while (score <= 10);
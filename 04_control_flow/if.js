// 1 => if(condition){)else{}

// < | less than
// > | greater than
// <= | less than equal
// >=  | greater than equal
// == | equal
// != |  Not equal
// === | equal to check datatype
// !==

let tempreture = 50;
if(tempreture < 52){
    console.log('Tempreture is greater than 50');
}else{
    console.log('tempreture is less than 50');
}
// check block scope => let , const
let score = 90;
if(score > 40){
    const power = "fly";
    console.log(`user power:${power}`); // its block scope
}
//console.log(`user power:${power}`);// error its ${power} is not define

// shorthand notation
let balance = 1200;
//if (balance > 900) console.log(`so balance is less than 1000`);

// nested
if(balance < 500){
    console.log(`balance is 500`);
}else if(balance < 750){
    console.log(`balance is 750`);
}else if(balance < 1000){
    console.log(`balance is  900`);
}else{
    console.log(`balance is greater tah 1000`);
}

// real life example

let debitcard = true;
let userloggedin = true;
let loggedingoogle = false;
let loggedinemail = true;
//  && |and  => check left and right condition 
if (debitcard && userloggedin) {
    console.log(`Allow to buy product♥️`);
}

// check multiple conditio one is true so condition is execute
// || or
if(loggedinemail || loggedingoogle){
    console.log(`user logged in`);
}


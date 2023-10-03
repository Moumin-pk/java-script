
function myFunction() {
    console.log('m');
    console.log('o');
    console.log('u');
    console.log('m');
    console.log('i');
    console.log('n');
}

myFunction()

// add two number

function addTwoNum(num1 ,num2){
    // const add = num1+num2;
    //console.log(add);
    //return add
    return num1 +num2;
}

const result = addTwoNum(5,6)
console.log('Result => ' + result);

// usert login

function userLogin(name){
    // if(name === undefined){  
    //     console.log(`please enter your name`);
    //     return
    // }
    // same syntax
    if(!name){
        console.log('please enter your name');
        return;
    }
    return `${name} congragulation you are login⚔️`
}

//console.log(userLogin('moumin Ahmad'));
console.log(userLogin());  // undefine

// ... => rest operater or spread operater
function calculaterCartPrice(...num1){ // multiple value save in the form of array
    return num1;
}
console.log(calculaterCartPrice(123,'MMMMMM',33445,'NFNFNFN',565,'HJHJHJ'));

const user = {
    author: "moumin",
    price : 234
}
function handleObject(elem){
//return `username is  ${anyobject.username} and price is ${anyobject.price}`;
console.log(`username is  ${elem.author} and price is ${elem.price}`);

}
handleObject()

const myNewArray = [200,400,100,600]
function returnsecondvlue(getArray){
    return getArray
}
console.log(returnsecondvlue(myNewArray));
// this => current context value reprsent

const user = {
    name: 'moumin',
    id : 97654473,
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(`Your id is : ${this.id}`);
    }
}
user.welcomeMessage()
user.name = 'Ahmad';
user.welcomeMessage()

console.log(this); // empty object in node => global object in window

// Arrow function 

function fun(){
    let elem  = 'one';
    console.log(this.elem);
}
fun() // this keyword is not define in function

const num = function(){
    let num =34;
    console.log(this.num);
}
num()  // is same 

// Arrow function
const num1 = () => {
let name = 'kkdk';
console.log(this.name);
}
num1() // is same
  

// => 1
// const newArrow = function(num1,num2){
//     return num1+num2
// }

// => 2

// const newArrow = (num1,num2) =>{
//     return num1 + num2;
// }

//  =>  3
//const newArrow = (num1,num2) => num1 + num2;

// => 4
//const newArrow = (num1,num2) => (num1+num2)

// object store  => 5
const newArrow = (num1,num2) =>({name: 'moumin'}) 
console.log(newArrow(5,7));

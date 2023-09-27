// const tinderUser = new Object()  // single ton object
const tinderUser = {}    //non single ton object

tinderUser.id = "123abc"
tinderUser.name = 'moumin'
tinderUser.isLoggedIn = false

//console.log(typeof tinderUser);
 
// object nested to store
const regularUser = {
    email: 'moumin@gmail.com',
    fullname : {
        userFullName:{
            firstName: "Moumin",
            lastName : "Ahmad"
        }
    }
}

console.log(regularUser.fullname.userFullName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const obj4 = {obj1,obj2,obj3}  
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1 , ...obj2, ...obj3} // most use spread
console.log(obj4);

const user =[
    {
        email: "moumin@gmailcom",
        id:"123abc"
    },
    {
        Name:"Moumin-Ahmad",
        id:"123abc"
    },
    {
        Name: "Sehar",
        id:"123abc"
    },
]

console.log(user[1].Name);
console.log(Object.keys(tinderUser));  // key
console.log(Object.values(tinderUser)); // values
console.log(Object.entries(tinderUser)); //  seprated divide in array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // answer in boolean form
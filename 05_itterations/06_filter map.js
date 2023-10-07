
// array not return vlue
const coding =['moumin','hassan','sehar'];
const values = coding.forEach((elem)=>{
    //console.log(elem);
    return elem
})

console.log(values);

// filter

const myNum = [1,2,3,4,5,6,7,8,9,10];
// const newNum = myNum.filter((elem)=> elem > 6)
// console.log(newNum);

// use in map
const newNum = [];
myNum.forEach((elem)=>{
    if(elem > 5){
        newNum.push(elem)
    }
})

console.log(newNum);

const users = [
    {
      name: "User 1",
      age: 25,
      email: "user1@example.com"
    },
    {
      name: "User 2",
      age: 30,
      email: "user2@example.com"
    },
    {
      name: "User 3",
      age: 35,
      email: "user3@example.com"
    },
    {
      name: "User 4",
      age: 40,
      email: "user4@example.com"
    },
    {
      name: "User 5",
      age: 45,
      email: "user5@example.com"
    },
    {
      name: "User 6",
      age: 50,
      email: "user6@example.com"
    },
    {
      name: "User 7",
      age: 55,
      email: "user7@example.com"
    },
    {
      name: "User 8",
      age: 60,
      email: "user8@example.com"
    },
    {
      name: "User 9",
      age: 65,
      email: "user9@example.com"
    },
    {
      name: "User 10",
      age: 70,
      email: "user10@example.com"
    }
  ];
let age = users.filter((elem)=> elem.age > 50)
age = users.filter((elem)=>elem.name > 'User 5')
  console.log(age);

  


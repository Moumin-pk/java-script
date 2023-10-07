// array

const coding = ['js','html','php','rudy','cpp']

// => (1)
// coding.forEach((elem)=>
//     console.log(elem)
// )

// => (2)
// coding.forEach(function (elem){
//      console.log(elem);
// })

// => (3)
myFunction = (elem) => console.log(elem);
coding.forEach(myFunction)

coding.forEach((elem , index , arr)=>{
    console.log(elem,index,arr);
})


// array in object

const programing = [
    {
        languageName: "javascript",
        languageFileName: "JS"
    },
    {
        languageName: "phyton",
        languageFileName: "PH"
    },
    {
        languageName: "Rudy",
        languageFileName: "Ru"
    },
    
]

programing.forEach((elem)=>{
console.log(elem.languageName, '=>' ,elem.languageFileName);
})
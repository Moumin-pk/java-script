// reduce

const num = [1,2,3]
// const mytotal  = num.reduce(function (acc,curv){
//     console.log(`acc : ${acc} and Curval : ${curv}`);
//     return acc + curv;
// },0)

// convert in arrow function


const mytotal = num.reduce((acc,curr) => acc+curr , 0)

console.log(mytotal);

// add course price

const courses = [
  {
    courseName: "Mathematics",
    coursePrice: 50
  },
  {
    courseName: "History",
    coursePrice: 40
  },
  {
    courseName: "Science",
    coursePrice: 60
  },
  {
    courseName: "English",
    coursePrice: 45
  },
  {
    courseName: "Computer Science",
    coursePrice: 70
  }
];

const total = courses.reduce((acc,item) => acc+item.coursePrice,0)
console.log(total);
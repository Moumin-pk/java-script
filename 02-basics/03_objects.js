// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
console.log(typeof mySym);

const jsuser = {
    name : 'moumin',
    age : 123,
    [mySym] : 'Moumin Ahmad', // USE SYMBOL KEY
    location : 'sialkot',
    email: "offical.moumin@gmail.com",
    isLoggedin: false,
}

//two type call the object
console.log(jsuser.name);  // => one method
console.log(jsuser["name"]);  // =>  second method
console.log(typeof jsuser[mySym]);
//Object.freeze(jsuser)  // its freeze object value not change

jsuser.greeting = function(){
    console.log('hello js user '+this.name);
}
console.log(jsuser.greeting());


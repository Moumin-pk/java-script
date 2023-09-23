
// three varable in js 
const  accountId = 1445577;
let accountEmail = 'NMMNMN@goole.com';
var accountPassword = '12346';
accounyCity = 'Lahore';
let accountSTate;  // undefine

// accountId = 2266778 // not allowedf to change const varaiable

accountEmail = 'momo@googlr.com'; 
accountPassword = '23456';
accounyCity = 'islamabad';

/*
prefer not use var
because of issue in block scope  and function scope
*/

console.table([
    accountEmail , accountPassword, accounyCity, accountSTate
])
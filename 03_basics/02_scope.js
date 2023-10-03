
if(true){
    var a = 10;
    let b = 20;  // scope
    const c = 30 ; // scope
}

console.log('var => '+a);  
//console.log('let => '+b);
//console.log('const => '+c); 

// {} => scope of the programe

// nested scope
function one(){
    const userName = 'Moumin Ahmad';
    function two(){
        const website = 'instagram';
        console.log('call outer const => ',userName);
    }
    //console.log('call inner const =>' ,website );
    two()
}
one()

if(true){
    const username = 'ahmad '
    if(username === 'ahmad '){
        const website = ' yotube'
        console.log(username + website);
    }
    //console.log(website)
}
//console.log(username);

// ++++++++++++++++ intresting❌ ++++++++++++++

// function => 1
console.log(oneNum(5));
function oneNum(elem){
    return elem+1;
}


// function => 2   its scope
console.log(twoNum(6));
const twoNum = function(elem){
return elem+1;
}




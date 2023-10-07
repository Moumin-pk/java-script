// for in

const lang = {
    JS : 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift : 'Swift by Apple'
}
for (const key in lang) {
        console.log(`${key} shortcut is for => ${lang[key]}`);
}

// string
// its default

const programing =['js','rb','py','java','cpp']
for (const key in programing) {
    console.log(programing[key]);
}


// map 
// not itteraction in for in
const map = new Map()
map.set('PK', 'Pakistan')
map.set('US', 'United States of America')
map.set('FR', 'France')

for (const key in map) {
    console.log(key);
}



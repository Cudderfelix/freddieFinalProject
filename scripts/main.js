// console.log(global);

// const name = 'Ifeacho Chuka Felix';

//console.log(global);

// setTimeout(() => {
//    console.log(`${name} is the timeout`);
//}, 2000);
// 

// let name1 = `Stephanie Ugwuja Dumebi`;


// setTimeout(() => {
// console.log(`${name1} is my wife. ${name} please time out this process.`);
//  clearInterval(init);
// }, 2500);

// const init = setInterval(() => {
// console.log(`${name1} is my wife.`);

// }, 1000);

// global objects in window is different from the global objects in node

// console.log(__dirname);
//console.log(__filename); 

const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {

})

const { people, ages } = require('./people');

console.log(people, ages);
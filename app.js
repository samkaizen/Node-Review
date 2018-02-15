const test = require('./counter');
// the whole module.0exports  lobject is stored in stuff variable
const stuff= require('./multiExports');
// so now all those exports are avaliable as stuff = module.exports object , this is the most important thing to note here 

// let run the adder function

  
console.log(stuff.adder(99,1));// the results of adding is   100
console.log(stuff.multi(99,1));// the results of multiplication is  99

console.log(stuff.diff(99,1));// the results of substracting is   98



//console.log(test(['sam', 'Sarah']));
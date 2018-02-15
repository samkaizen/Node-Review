const adder = (a,b)=>{
    return` the results of adding is   ${a+b}  `
}

const multi = (a,b)=>{
    return` the results of multiplication is   ${a*b}  `;
}
const diff = (a,b)=>{
    return` the results of substracting is   ${a-b}  `;


}
// Now the Question is how to exports all of those functions
// the answer is simple 
module.exports = {
    adder : adder,
    multi : multi,
    diff : diff
}
// Go to app.js to see this in action!!
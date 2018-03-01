//const test = require('./counter');
// the whole module.0exports  lobject is stored in stuff variable
//const stuff= require('./multiExports');
// so now all those exports are avaliable as stuff = module.exports object , this is the most important thing to note here 

// let run the adder function

  
//console.log(stuff.adder(99,1));// the results of adding is   100
//console.log(stuff.multi(99,1));// the results of multiplication is  99

//console.log(stuff.diff(99,1));// the results of substracting is   98

// This Part is for  patials Views with express

const express = require('express');
const app = express();

//In order to use ejs as templating engine you have to set it first
app.set('view engine' , 'ejs');

 
/*  This is how we send html files with NO Dynamic content injected!!
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res)=>{
	res.sendFile(__dirname + '/contact.html');
});
*/
// This part focused on sending some ejs files to the user
app.get('/', (req, res)=>{
	// to send an ejs file you only have to mention its name and ejs engine is clever enought to know what you are talking about
	res.render('index');
});

app.get('/contact', (req, res)=>{
	res.render('contact');
});



app.listen(3000, ()=>console.log('Connection to server is 200'));
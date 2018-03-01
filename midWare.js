const express = require('express');
const app = express();

app.set('view engine' , 'ejs');


// WHAT IS A MIDDLEWRAE first  :  a mw is just a code that sitting between req and res, a console.log for instance 
// express come baked with a built-in Mw that we can use to Serve static files like  external css files
//Node treats those static files ad Routes so we have serve them as so
// Normally those Static Files are accessible in the public folder so express can go direclty to the asseet witout specifying the public iteself
app.use('/assets' , express.static(__dirname + '/views/assets'));
// first arg is the route , the second being the folder containing the static files
// if the static files were in a public folder we could have been only mentionned the express.static()
// whenever ther is a file requiriong those assets , they will be available in between req and res thanks to this buil in functionalty of express! so we don't have to handle those specific routes in a manula way!!
// The whole point so is to AUTOMATE THE PROCESS OF HANDELING THOSE STATIC FILES ROUTES
// Go NOW TO post.js file THERE is another type of MiddleWare , the body parser that parses the body of the request when we use POST as method(Posting some data to the server!!)



app.get('/', (req, res)=>{
		res.render('index');

	
});

app.get('/contact', (req, res)=>{
	res.render('contact');
});



app.listen(3000, ()=>console.log('Connection to server is 200'));
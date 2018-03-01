const express = require('express');
const app = express();

// what is Querty string : additionaldata we pass to a url (get request), the first elment has to be ? after that we chain on some key value pairs preceded with &
// see this example http://127.0.0.1:3000/contact?dept=marketing&person=joe
// Now the Question is how to ACCESS THIS DATA from the url 
// The answer is simple : all those query info is a property of the req object let s console .log this in action

app.set('view engine' , 'ejs');


app.use('/assets' , express.static(__dirname + '/views/assets'));



app.get('/', (req, res)=>{
		res.render('index');

	
});

app.get('/contact', (req, res)=>{
    //console.log(req.query); // This is what we get { dept: 'marketing', person: 'joe' }
    // so this is how easy to get those qs data out of the request object
    // so because we serve an ejs template we can go ahead and inject dynamically this data to the user

	res.render('contact', { data : req.query});
});



app.listen(3000, ()=>console.log('Connection to server is established!!'));
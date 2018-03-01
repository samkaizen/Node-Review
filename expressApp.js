//Step 1 :  importing the express module
const express = require('express');

// Step 2 : creating express app

const app = express();

// step 2.1 : Routing which is much EASIER than the vanilla way !!

app.get('/', (req,res)=>{

    res.send('this is Home page!');
});


app.get('/contact', (req,res)=>{

    res.send('this is Contact page!');
});

// Dynamic request wwith routes params : we can get access to what ever the user input in the url via the params object after colon like so 
app.get('/profile/:id', (req, res)=>{

     res.send(`You have requested a profile with this id ${req.params.id}`);
     // so the id has been made available via the req object and more precisely inside the params object req.params.id , NOTICE THAT THE colon : here is very important it INDICATED THAT THE FOLLOWING KEY is a property of the params object !!
     // so the COLON (: ) is our indicator the what comes afterwards in this case id is a property of the the params object
     // the : is just for route ; You can NOT go to the url and put the : there 
     // here is a working example : http://127.0.0.1:3000/profile/123456
     // this prints out this out put in the webpage : You have requested a profile with this id 123456


});


// Ste^p 3 : listening to certain port
app.listen(3000, ()=>console.log('connection has been established !!'));

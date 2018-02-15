const express =  require('express');

const app = express();

//Setting the View engine is necessary


app.set('view engine' , 'ejs');

app.get('/', (req,res)=>{
    //This is how we send html files
    res.sendFile(  __dirname + '/index.html');
});
app.get('ct'/conta, (req,res)=>{
    //This is how we send html files
    res.sendFile( __dirname + '/contact.html');
});

// using ejs as temlating engine in order to DYNAMICALLY INJECT CONTENT IN HTML FILES WE SERVE TP THE USERS
app.get('/profile/:name', (req,res)=>{
    //This is how we send html files with render(): so 'profile' is the name of the file that is onside the views folder (ejs automatically goes to that folder ),t in the second parametre is the the data that we want to dynamically inject in the profile.ejs file to serve to the user, in this exaple we grabbed the name that any given user input
    //as req.params.name
    // the next step is to flip back over the profileejs and just dynamically inject this data (person) => go to profile.ejs to see that !
    const ninja = { age : 33 , belt : 'Black'}
     const {name} = req.params
    res.render('profile', { name :name , ninja : ninja});
});
app.listen(8888, ()=> console.log('litening to port 8888'));
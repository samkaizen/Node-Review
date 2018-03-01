const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine' , 'ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// this body parser will parse the data that we submit when we submit the form, this data is available as req.body hence the name of body parser , why using in itt in first place because express has not that functionaty baked in so theis is te whole story is accessibg the post request data



app.use('/assets' , express.static(__dirname + '/views/assets'));



app.get('/', (req, res)=>{
		res.render('index');

	
});

app.get('/contact', (req, res)=>{
  

	res.render('contact', { data : req.query});
});
app.post('/contact', urlencodedParser , (req, res)=>{
  console.log(req.body);// { who: 'Sarah', departement: 'Marketing', email: 'sarah@sarah.net' } 


	res.render('contact-success', { data : req.body});
});



app.listen(3000, ()=>console.log('Connection to server is established!!'));

// Step 1 : requiring http modoule
const http = require('http');

// Step 2 : Creating the Server

const server = http.createServer(
    (req, res)=>{
        //to send json info you have to specify content type of application/json
    

        res.writeHead(200,{'Content-Type': 'application/json'});

        const ninja = {
            name : 'Yoshi',
            belt  : 'Black',
            skill_level : 'Danger'
        }

         // we can serve the json object like So
         // First Stringify it
         stringNinja = JSON.stringify(ninja);
        res.end(stringNinja);
    }
);
// Step 3 : Listening to a special Port Number of a certain Ip



server.listen(3000, '127.0.0.1', ()=>{
    console.log('You DAwgs, Now listening to port 3000 FIREWORKS!!!!');

});



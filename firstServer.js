
// This is How we set up a server in node js VANILLA WAY
// Step 1 : requiring http modoule
const http = require('http');

// Step 2 : Creating the Server

const server = http.createServer(
    (req, res)=>{
        //console.log('requeqt was made by yhis url : ', req.url);

        res.writeHead(200,{'Content-Type': 'application/json'});
        
         const person = {
             name : 'john',
             age : '34'
         }


        res.end(JSON.stringify(person));
    }
);
// Step 3 : Listening to a special Port Number of a certain Ip



server.listen(3000, '127.0.0.1', ()=>{
    console.log('Server ON, Now listening to port 3000!');

});



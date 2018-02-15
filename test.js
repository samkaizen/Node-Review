// creating a server vanilla way 

// step 1  :  req http module

const http  = require('http');

// step 2 :  creating the server 
const server = http.createServer((req,res)=>{

    // // step 2.1
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello server')
});

// Listening to a certain port of an Ip

server.listen(8888, '127.0.0.1', ()=>{
    console.log('Connection to server is On');
});
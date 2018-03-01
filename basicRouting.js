
const http = require('http');
const fs= require('fs')


const server = http.createServer(
    (req, res)=>{
    
        if(req.url === '/home' || req.url === '/'){

            res.writeHead(200,{'Content-Type': 'text/html'});

            fs.createReadStream(__dirname + '/index.html').pipe(res);
        }else if(req.url=== '/contact'  ){
            res.writeHead(200,{'Content-Type': 'text/html'});

            fs.createReadStream(__dirname + '/contact.html').pipe(res);
        }
        else if(req.url === '/api/ninjas'  ){
            res.writeHead(200,{'Content-Type': 'application/json'});
            const ninjas = [{ name : 'Yoshi', age : 33},{name : 'Ip Man', age : 44}];
            res.end(JSON.stringify(ninjas));

        }
        else {
            res.writeHead(200,{'Content-Type': 'text/html'});

            fs.createReadStream(__dirname + '/404.html').pipe(res);
            
        }
    }
);



server.listen(3000, '127.0.0.1', ()=>{
    console.log('You DAwgs, Now listening to port 3000 FIREWORKS!!!!');

});



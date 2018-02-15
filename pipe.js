const fs = require('fs');
const http = require('http');


const myReadStream = fs.createReadStream( __dirname + '/readme.txt', 'utf-8');

const myWriteStream = fs.WriteStream( __dirname + '/writeMePipe.txt');


//}); the readable stream ni inherits the evenet emitter : we can no listen to some events when occurds on the readstream


// pipe is only available on readable Streams, 
myReadStream.pipe(myWriteStream);

// this bit of code allows us to reduce the amount of code istead of writing the following one : 
/*
myReadStream.on('data', (chunk)=>{
    //console.log('A new Chunk of data has just Arrived :');
    //console.log(chunk)
    myWriteStream.write(chunk);
 }

*/
// now let's serve that readable stream to the user

const server = http.createServer( (req, res)=>{
        //console.log('requeqt was made by yhis url : ', req.url);

        res.writeHead(200,{'Content-Type': 'text/html'});
        /* This part for piping to the directory it self
        //const readableStream2 = fs.createReadStream(__dirname + '/readme.txt');
        //readableStream2.pipe(res);
        // res is the writable stream here

        // we DO NOT have to end the response because it's already  done
       // res.end('Hello Node!');
       
       */
      // we can also pipe (serve) html pages : notice that content-type is no more text/plain instead text/html !!
       const readHtml = fs.createReadStream('./index.html');
      // readHtml.pipe(res);
       // again we only pipe a READABLE STREAM and this is IMPORTANT!!
        // we do not need to end the process with resend() , pipr() will do the same thing 
        //res object is our writable stream
      // pipe allows us to reduce the  the folowing amount of code 
      
        /* readHtml.on('data', (chunk)=> {
            console.log('chunk arrived at', new Date());
            res.write(chunk)
        }); */




});
// Step 3 : Listening to a special Port Number of a certain Ip



server.listen(3000, '127.0.0.1', ()=>{
    console.log('You DAwgs, Now listening to port 3000 FIREWORKS!!!!');

});


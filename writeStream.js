const fs = require('fs');

const myReadStream = fs.createReadStream( __dirname + '/readme.txt', 'utf-8');

//first arg is the path where we want to write concatenated with the file name

const myWriteStream = fs.WriteStream( __dirname + '/writeMe.txt');


//}); the readable stream ni inherits the evenet emitter : we can no listen to some events when occurds on the readstream


// whenever the data arrives Go ahead and console log a chunk of it !!
myReadStream.on('data', (chunk)=>{
   console.log('A new Chunk of data has just Arrived :');
   //console.log(chunk)
   myWriteStream.write(chunk);
}

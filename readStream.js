// fs means file system and it is a core module 
const fs = require('fs');

// readavble Stream are excelent in an efficiency stand point becase we consume the data chunk by chunk 
const myReadStream = fs.createReadStream( __dirname + '/readme.txt', 'utf-8');

// First arg is the path of the file, the second is the caractere encoding 
// the readable stream ni inherits the evenet emitter : we can now listen to some events when occurds on the readstream


// whenever the data arrives Go ahead and console log a chunk of it !!
// 'data' is a built in event emitter!!
myReadStream.on('data', (chunk)=>{
   console.log('A new Chunk of data has just Arrived :');
   console.log(chunk)
});
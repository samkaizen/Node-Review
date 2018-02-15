const fs = require('fs');

let readme = fs.readFile('./alpha.txt', 'utf8', (err, data)=>{
   // console.log(data);

    fs.writeFile('./write2.txt', 'Helllllllloooooooooooooo', ()=>null);

});


fs.writeFile('alpha3.txt','helllo world' ,/*some callback to execute */()=>null);

// to remove a dir you have to remove its files fires like so
/* 
fs.unlink('path_To_File', ()=>{
    //remove directory here
    fs.rmdir('path_to_dir')
})*/
fs.mkdir('./teta',()=>{
    fs.rmdir('teta', ()=>null);

});
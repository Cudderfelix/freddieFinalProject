const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.pipe(writeStream);
//readStream.on('data', (chunk) => {
//    console.log('--New Chunk --');
//    console.log(chunk);
//    writeStream.write('\nNEW CHUNK\n');
//    writeStream.write(chunk);
//});



// practising the data stream module
const readStream1 = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf-8' });
const writeStream1 = fs.createWriteStream('./docs/blog5.txt');

//readStream1.on('data', (chunk) => {
//    console.log('--New Chunk--');
//    console.log(chunk);
//    writeStream1.write('/n New Chunk/n');
//    writeStream1.write(chunk);
//});
readStream.pipe(writeStream1);
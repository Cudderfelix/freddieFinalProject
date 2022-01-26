//const os = require('os');

//console.log(os.platform(), os.homedir());

//console.log(os);

const fs = require('fs');

// Creating Folders in Node
if (!fs.existsSync('./docs')) {
    fs.mkdir('./docs', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Directory has been created');
    });
} else {
    fs.rmdir('./docs', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Directory has been truncated!');
    });
};


// Creating Files in Node
if (!fs.existsSync('./docs/blog2.txt')) {
    fs.writeFile('./docs/blog2.txt', `Hello! My name is Ifeacho Chuka Felix, and I'm a Software Developer.`, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File has been Created');
    });
} else {
    fs.unlink('./docs/blog2.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File has been Deleted');
    });
};
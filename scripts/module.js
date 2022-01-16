//const people = ['Chidumebi', 'Augustine', 'Fathia', 'Gbenga', 'Omotosho'];

const { Console } = require("console");
const fs = require('fs');

//const ages = [28, 32, 45, 37, 92];

//module.exports = {
//    people,
//    ages
// };

// reading files
//const fs = require('fs');

//fs.readFile('./docs/blog1.txt', (err, data) => {
//  if (err) {
//     console.log(err);
// }
//console.log(data.toString());
//});

//console.log('Last Line');




// writing files
fs.writeFile('./docs/blog2.txt', `Hello World! I'm learning Node Development at the moment. My name is CudderFelix and I'm a Software Developer.`, () => {
    console.log('File was written');
});





// directories
if (!fs.existsSync('./demoDir')) {

    fs.mkdir('./demoDir', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder Created');
    });
} else {
    fs.rmdir('./demoDir', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder Deleted');
    })
}



// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}





//const os = require('os');

//console.log(os.platform(), os.homedir());

//console.log(os);
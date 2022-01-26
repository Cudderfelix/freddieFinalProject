const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // lodash module
    const num = _.random(0, 20);
    console.log(num);

    // set header for response
    res.setHeader('Content-type', 'text/html');
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'landing.html';
            break;
            res.statusCode = 200;

        case '/index.html':
            path += 'index.html';
            break;
            res.statusCode = 200;

        case '/landing.html':
            path += 'landing.html';
            break;
            res.statusCode = 200;

        case '/about':
            res.statusCode = 301;
            res.setHeader('Location', '/landing.html');
            res.end();
            break;

        default:
            path += '404.html';
            break;
            res.statusCode = 404;
    }
    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    });
});

server.listen(3000, 'localHost', () => {
    console.log('Server has started on port 3000');
});
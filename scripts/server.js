const http = require('http');
const { createServer } = require('https');

const server = http.createServer((req, res) => {
    console.timeLog('request made');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});
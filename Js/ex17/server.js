const http = require('http'); 

// Create the server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

// Define the port and host
const port = 3000;
const host = 'localhost';

// Start the server
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
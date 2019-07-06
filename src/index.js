// ENV VARIABLES from .env file
// example: process.env.NODE_ENV which is equal to 'development'
require('dotenv').config();

// DEFAULT NODEJS SERVER
const http = require('http');
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
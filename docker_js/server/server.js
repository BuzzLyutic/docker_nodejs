// server.js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
 fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
 });
});

server.listen(1234, () => {
 console.log('Server running at http://localhost:1234/');
});

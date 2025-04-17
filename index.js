const http = require('http');
const PORT = 4000;

const server = http.createServer((req, res) => {
  res.end('Node.js App is Running!');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

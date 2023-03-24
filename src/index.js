const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const { response } = require('express');

const server = express();
server.use(cors());
server.use(express.json());

const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post('/submit', (req, res) => {
  res.json(req.body);
});

server.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

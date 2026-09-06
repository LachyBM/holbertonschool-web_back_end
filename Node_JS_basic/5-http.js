const http = require('http');
const countrStudents = require('./3-read_file_async');

const HOSTNAME = 'localhost';
const PORT = 1245;
const DB = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    const logs = [];
    const conlog = console.log;
    console.log = (msg) => logs.push(msg);

    countrStudents(DB)
      .then(() => {
        console.log = conlog;
        res.end(logs.join('\n'));
      })
      .catch((error) => {
        console.log = conlog;
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

module.exports = app;

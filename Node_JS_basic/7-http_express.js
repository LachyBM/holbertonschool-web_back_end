const express = require('express');
const cStudents = require('./3-read_file_async');

const app = express();

const PORT = 1245;
const DB = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const logs = [];
  const conlog = console.log;
  console.log = (msg) => logs.push(msg);

  try {
    await cStudents(DB);
    console.log = conlog;
    res.send(`This is the list of our students\n${logs.join('\n')}`);
  } catch (error) {
    console.log = conlog;
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(PORT);

module.exports = app;

const express = require('express');

const app = express();
const chalk = require('chalk');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/jquery/dist')),
);
app.use(bodyParser.urlencoded({ extended: false }));
// console.log("path: ",path);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/', '/index.html'));
});

app.post('/submit-form', (req, res) => {
  const { username } = req.body;
  // ...
  console.log('data: ', username);
  //   res.end();
});

app.listen(3000, () => {
  console.log(
    chalk.blue('server is working at ', chalk.red('https://localhost:3000')),
  );
});

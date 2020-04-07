const express = require('express');

const app = express();
const chalk = require('chalk');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap-material-design/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap-material-design/dist/js')));

app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const dataObj = { title: 'Mgr Doctor' };
app.get('/', (req, res) => {
  res.render('index', dataObj);
});

app.post('/submit-form', (req) => {
  const { username } = req.body;

  debug('data: ', username);
});

app.listen(3000, () => {
  debug(
    chalk.blue('server is working at ', chalk.red('https://localhost:3000')),
  );
});

const express = require('express');

const app = express();
const chalk = require('chalk');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

// const albumRouter = express.Router();
// const portisheadsRouter = express.Router();

const dataObj = require('./data/dataObj');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap3/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap3/dist/js')));

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap-material-design/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap-material-design/dist/js')));

app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const portisheadsRouter = require('./routers/portisheadsRouter');
const albumRouter = require('./routers/albumRouter');
const adminRouter = require('./routers/adminRouter')();


app.use('/albums', albumRouter);
app.use('/portishead', portisheadsRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  res.render('index', dataObj);
});

app.post('/submit-form', (req, res) => {
  // const { username } = req.body;

  debug('data: ', req.login);
  res.json(req.body);
});

app.listen(3000, () => {
  debug(
    chalk.blue('server is working at ', chalk.red('https://localhost:3000')),
  );
});

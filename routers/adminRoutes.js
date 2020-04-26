const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');
// eslint-disable-next-line quotes
const chalk = require('chalk');

const adminRouter = express.Router();
// eslint-disable-next-line global-require
// const dataObj = [require('../data/dataObj')];
const albums = [
  {
    artist: 'metallica',
    album: 'black',
  },
  {
    artist: 'venom',
    album: 'black metal',
  },
];

function router(data) {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
          debug('Conected correctly to server');

          const db = client.db(dbName);

          const response = await db.collection('albumy').insertMany(albums);
          res.json(response);
        } catch (err) {
          debug(chalk.red('blad: '), err);
        }
        client.close();
      }());
    });
  return adminRouter;
}

module.exports = router;

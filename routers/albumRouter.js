const express = require('express');

const albumRouter = express.Router();
const dataObj = require('../data/dataObj');


albumRouter.route('/').get((req, res) => {
  res.render('albums', dataObj);
});
albumRouter.route('/singleAlbum').get((req, res) => {
  res.send('hello single album');
});

module.exports = albumRouter;

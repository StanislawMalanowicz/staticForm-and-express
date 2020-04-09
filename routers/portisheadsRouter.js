const express = require('express');

const portisheadsRouter = express.Router();
const dataObj = require('../data/dataObj');

portisheadsRouter.route('/').get((req, res) => {
  res.render('portishead', dataObj);
});
portisheadsRouter.route('/:id').get((req, res) => {
  const { id } = req.params;
  // res.send('hello', id);
  const data = dataObj.albums[1].albums[id];
  res.render('singleAlbum', data);
});

module.exports = portisheadsRouter;

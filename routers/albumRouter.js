const express = require('express');

const albumRouter = express.Router();


function router(dataObj) {
  albumRouter.route('/').get((_req, res) => {
    res.render('albums', dataObj);
  });
  albumRouter.route('/singleAlbum').get((req, res) => {
    res.send('hello single album');
  });
  return albumRouter;
}

module.exports = router;

const express = require('express');

const portisheadsRouter = express.Router();
function router(dataObj) {
  portisheadsRouter.route('/').get((req, res) => {
    res.render('portishead', dataObj);
  });
  portisheadsRouter.route('/:id').get((req, res) => {
    const { id } = req.params;
    const data = dataObj.albums[1].albums[id];
    res.render('singleAlbum', data);
  });
  return portisheadsRouter;
}

module.exports = router;

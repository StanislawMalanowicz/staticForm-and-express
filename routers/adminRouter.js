const express = require('express');

const adminRouter = express.Router();

function router() {
  adminRouter.route('/').get((req, res) => {
    res.send('admin panel');
  });
  return adminRouter;
}

module.exports = router;

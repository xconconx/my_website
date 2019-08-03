const express = require('express'),
    router = express.Router();

/* whoami */
router.get('/', (req, res, next) => {
  res.render('whoami');
});

module.exports = router;

const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('post', {title: 'sthreepop'});
});

module.exports = router;

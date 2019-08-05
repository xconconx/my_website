const express = require('express'),
    router = express.Router();


router.get('/', (req, res, next) => {
    res.render('index', {title: 'Steven Fernandez', sub_title: 'sthreepop'});
});

module.exports = router;

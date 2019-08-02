const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('order', {title: 'Crumb Cafe Delivery!'});
});

module.exports = router;

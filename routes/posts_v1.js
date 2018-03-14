var express = require('express');
var router = express.Router();

const db = require('../database/managers/v1/database_posts_v1');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    db.getPostById(req.params.id, function (value) {
        res.send(value);
    });
});

module.exports = router;

//:id -> post of that channel that matches id
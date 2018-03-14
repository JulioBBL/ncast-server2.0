var express = require('express');
var router = express.Router();

const entities = require('./entities_v1');
const channels = require('./channels_v1');
const posts = require('./posts_v1');

router.use('/entities', entities);
router.use('/channels', channels);
router.use('/posts', posts);

module.exports = router;
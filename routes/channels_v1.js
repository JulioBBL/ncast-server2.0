var express = require('express');
var router = express.Router();

const dbEntity = require('../database/managers/v1/database_entities_v1');
const dbChannel = require('../database/managers/v1/database_channels_v1');
const dbPost = require('../database/managers/v1/database_posts_v1');

router.get('/:id', function(req, res, next) {
    dbChannel.getChannelById(req.params.id, function (value) {
        res.send(value)
    });
});

router.get('/:id/posts', function(req, res, next) {
    dbPost.getPostsByChannel(req.params.id, req.query.page || 0, function (value) {
        res.send(value)
    });
});

router.get('/:id/posts/search/:term', function(req, res, next) {
    dbPost.getPostsFromSingleChannelBySearchTerm(req.params.id, req.query.page || 0, req.params.term, function (value) {
        res.send(value)
    });
});

router.get('/multi/:ids', function(req, res, next) {
    const ids = req.params.ids.split(",");
    dbChannel.getMultipleChannelById(ids, function (value) {
        res.send(value)
    });
});

router.get('/multi/:ids/posts', function(req, res, next) {
    const ids = req.params.ids.split(",");
    dbPost.getPostsFromMultipleChannels(ids, req.query.page || 0, function (value) {
        res.send(value)
    });
});

router.get('/multi/:ids/posts/search/:term', function(req, res, next) {
    const ids = req.params.ids.split(",");
    dbPost.getPostsFromMultipleChannelBySearchTerm(ids, req.query.page, req.params.term, function (value) {
        res.send(value)
    });
});

module.exports = router;

//:id -> information of the channel with that id
    //posts -> all posts from that channel
        //search?term= -> posts that match search term
//multi/:ids -> information of the channels with the ids provided
    //posts -> posts from the channels specified (single string of ids separated by commas)
    //search?term= -> posts that match search term in the channels specified previously
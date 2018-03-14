var express = require('express');
var router = express.Router();

const dbEntity = require('../database/managers/v1/database_entities_v1');
const dbChannels = require('../database/managers/v1/database_channels_v1');
const dbPost = require('../database/managers/v1/database_posts_v1');

router.get('/:id', function(req, res, next) {
    dbEntity.getEntityById(req.params.id, function (value) {
        res.send(value)
    });
});

router.get('/:id/andParents', function(req, res, next) {
    dbEntity.getEntityByIdAndItsParents(req.params.id, function (value) {
        dbEntity.adjustEntities(value).then(function (value2) {
            res.send(value);
        });
    });
});

router.get('/:id/posts', function(req, res, next) {
    dbChannels.getChannelsFromEntity(req.params.id, function (channels) {
        channels = channels.map(function (channel) {
            return channel.id;
        });

        dbPost.getPostsFromMultipleChannels(channels, req.query.page || 0, function (value) {
            res.send(value)
        });
    });
});

router.get('/multi/:ids/posts', function(req, res, next) {
    const ids = req.params.ids.split(",");
    dbChannels.getChannelsFromMultipleEntities(ids, function (channels) {
        channels = channels.map(function (channel) {
            return channel.id;
        });

        dbPost.getPostsFromMultipleChannels(channels, req.query.page || 0, function (value) {
            res.send(value)
        });
    });
});

router.get('/:id/posts/search/:term', function(req, res, next) {
    dbChannels.getChannelsFromEntity(req.params.id, function (channels) {
        channels = channels.map(function (channel) {
            return channel.id;
        });

        dbPost.getPostsFromMultipleChannelBySearchTerm(channels, req.query.page || 0, req.params.term, function (value) {
            res.send(value)
        });
    });
});

router.get('/multi/:ids/posts/search/:term', function(req, res, next) {
    const ids = req.params.ids.split(",");
    dbChannels.getChannelsFromMultipleEntities(ids, function (channels) {
        channels = channels.map(function (channel) {
            return channel.id;
        });

        dbPost.getPostsFromMultipleChannelBySearchTerm(channels, req.query.page || 0, req.params.term, function (value) {
            res.send(value)
        });
    });
});

router.get('/:id/channels', function(req, res, next) {
    dbChannels.getChannelsFromEntity(req.params.id, function (value) {
        res.send(value)
    });
});

router.get('/:id/channels/external', function(req, res, next) {
    dbChannels.getExternalChannelsFromEntity(req.params.id, function (value) {
        res.send(value)
    });
});

module.exports = router;

//:id -> entity details (name, id, father entity, ???channel list???)
  //posts -> all posts from that entity
    //search?term= -> posts that match search term inside that entity
  //channels -> a list of the channels from that entity ???????????

const knex = require("../../connection");
const dbMisc = require("./database_misc_v1");
var pageSize = 20;

function getPostById(id, completion) {
    console.log(id);
    knex('post').where({id: id}).then(function (value) {
        adjustPost(value[0]).then(completion);
    });
}

function getPostsByChannel(channel, page, completion) {
    knex('post').where({channel: channel}).limit(pageSize).offset(pageSize*page).then(function (value) {
        adjustPosts(value).then(completion);
    });
}

function getPostsFromSingleChannelBySearchTerm(channel, page, term, completion) {
    knex('post').where({channel: channel}).whereRaw('LOWER(title) LIKE ?', '%'+term+'%').orderBy('postDate', 'desc').limit(pageSize).offset(pageSize*page).then(function (value) {
        adjustPosts(value).then(completion);
    });
}

function getPostsFromMultipleChannels(channels, page, completion) {
    const channelsTerm = "channel = \'" + channels.join("\' or channel = \'") + "\'";
    knex('post').whereRaw(channelsTerm).orderBy('postDate', 'desc').limit(pageSize).offset(pageSize*page).then(function (value) {
        adjustPosts(value).then(completion);
    });
}

function getPostsFromMultipleChannelBySearchTerm(channels, page, term, completion) {
    const channelsTerm = "(channel = \'" + channels.join("\' or channel = \'") + "\')";
    knex('post').whereRaw(channelsTerm + ' and LOWER(title) LIKE ?', '%'+term+'%').orderBy('postDate', 'desc').limit(pageSize).offset(pageSize*page).then(function (value) {
        adjustPosts(value).then(completion);
    });
}

function adjustPosts(posts) {
    return Promise.all(posts.map(adjustPost));
}

function adjustPost(post) {
    return new Promise(function(fulfill) {
        dbMisc.getPublicInfoForAuthorId(post.authorID, function (author) {
            post.authorID = undefined;
            post.author = author;
            fulfill(post);
        });
    });
}

module.exports = {
    getPostById: getPostById,
    getPostsByChannel: getPostsByChannel,
    getPostsFromMultipleChannels: getPostsFromMultipleChannels,
    getPostsFromSingleChannelBySearchTerm: getPostsFromSingleChannelBySearchTerm,
    getPostsFromMultipleChannelBySearchTerm: getPostsFromMultipleChannelBySearchTerm
};
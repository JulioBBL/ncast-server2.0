const knex = require("../../connection");
var pageSize = 20;

function getPublicInfoForAuthorId(id, completion) {
    knex('user').where({id: id}).then(function (value) {
        var author = value[0] || {};

        if (author) {
            author.username = undefined;
            author.password = undefined;
            author.roleID = undefined;
        }

        completion(author);
    });
}

module.exports = {
    getPublicInfoForAuthorId: getPublicInfoForAuthorId,
};
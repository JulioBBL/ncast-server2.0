const knex = require("../../connection");
var pageSize = 20;

function getPublicInfoForAuthorId(id, completion) {
    knex('user').where({id: id}).then(function (value) {
        var author = value[0] || {};

        if (value.role > 0) {
            value.username = undefined;
            value.password = undefined;
            value.roleID = undefined;

            author = value;
        }

        completion(author);
    });
}

module.exports = {
    getPublicInfoForAuthorId: getPublicInfoForAuthorId,
};
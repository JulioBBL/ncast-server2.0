const knex = require("../../connection");
var pageSize = 20;

const dbEntity = require("./database_entities_v1");

function getChannelById(id, completion) {
    knex('channel').where({id: id}).then(completion);
}

function getMultipleChannelById(ids, completion) {
    const channelsTerm = "id = \'" + ids.join("\' or id = \'") + "\'";
    knex('channel').whereRaw(channelsTerm).then(completion);
}

function getChannelsFromEntity(entity, completion) {
    knex('channel').where({entity: entity}).then(completion);
}

function getExternalChannelsFromEntity(entity, completion) {
    knex('externalChannel').where({entity: entity}).then(completion);
}

function getChannelsFromMultipleEntities(ids, completion) {
    const entitiesTerm = "entity = \'" + ids.join("\' or entity = \'") + "\'";
    knex('channel').whereRaw(entitiesTerm).then(completion);
}

module.exports = {
    getChannelById: getChannelById,
    getMultipleChannelById: getMultipleChannelById,
    getChannelsFromEntity: getChannelsFromEntity,
    getExternalChannelsFromEntity: getExternalChannelsFromEntity,
    getChannelsFromMultipleEntities: getChannelsFromMultipleEntities
};
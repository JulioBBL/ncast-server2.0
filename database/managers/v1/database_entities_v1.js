const knex = require("../../connection");
var pageSize = 20;

const dbChannel = require("./database_channels_v1");

function getEntityById(id, completion) {
    knex('entity').where({id: id}).then(function (value) {
        if (value[0]) {
            adjustEntity(value[0]).then(completion);
        } else {
            completion([]);
        }
    });
}

function getEntityByIdAndItsParents(id, completion) {
    if (id) {
        knex('entity').where({id: id}).then(function (entity) {
            if (entity[0]) {
                getEntityByIdAndItsParents(entity[0].father, function (father) {
                    completion(entity.concat(father))
                })
            } else {
                completion([]);
            }
        })
    } else {
        completion([]);
    }
}

function adjustEntities(entities) {
    return Promise.all(entities.map(adjustEntity));
}

function adjustEntity(entity) {
    return new Promise(function(fulfill) {
        dbChannel.getExternalChannelsFromEntity(entity.id, function (extchannels) {
            entity.extChannels = extchannels;

            dbChannel.getChannelsFromEntity(entity.id, function (channels) {
                entity.channelList = channels;
                fulfill(entity);
            });
        });
    });
}

module.exports = {
    pageSize: pageSize,
    getEntityByIdAndItsParents: getEntityByIdAndItsParents,
    adjustEntities: adjustEntities,
    getEntityById: getEntityById
};
// module.exports = require('knex')(config);

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js');
var knex = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]);
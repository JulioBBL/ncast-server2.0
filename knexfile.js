const databaseName = 'ncast';
const databaseConnection = process.env.DATABASE_URL || 'postgres://localhost:5432/'+ databaseName;

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: "localhost",
            user: "ncast",
            password: "ncast",
            database: "ncast"
        },
        migrations: {
            directory: __dirname + '/database/migrations'
        },
        seeds: {
            directory: __dirname + '/database/seeds/development'
        }
    },
    production: {
        client: 'postgresql',
        connection: databaseConnection,
        migrations: {
            directory: __dirname + '/database/migrations'
        },
        seeds: {
            directory: __dirname + '/database/seeds/production'
        }
    },
    test: {
        client: 'postgresql',
        connection: 'postgres://localhost:5432/' + databaseName + '_test',
        migrations: {
            directory: __dirname + '/database/db/migrations'
        },
        seeds: {
            directory: __dirname + '/database/seeds/development'
        }
    }
};
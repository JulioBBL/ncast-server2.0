
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('entity', function (table) {
            table.uuid('id').primary();
            table.uuid('father').nullable();
            table.foreign('father').references('entity.id').onDelete('CASCADE');
            table.string('name').notNullable();
            table.string('shortName').notNullable();
        }),

        knex.schema.createTable('channel', function (table) {
            table.uuid('id').primary();
            table.uuid('entity').notNullable();
            table.foreign('entity').references('entity.id').onDelete('CASCADE');
            table.string('name').notNullable();
            table.string('hexColor').defaultsTo('#000000');
            table.string('imageURL').notNullable().defaultsTo("");
        }),

        knex.schema.createTable('externalChannel', function (table) {
            table.uuid('id').primary();
            table.uuid('entity').notNullable();
            table.foreign('entity').references('entity.id').onDelete('CASCADE');
            table.string('name').notNullable();
            table.string('link').notNullable();
            table.string('imageURL').notNullable().defaultsTo("");
        }),

        knex.schema.createTable('role', function (table) {
            table.integer('id').primary();
            table.string('name').notNullable();
        }),

        knex.schema.createTable('user', function (table) {
            table.uuid('id').primary();
            table.uuid('entity').notNullable();
            table.foreign('entity').references('entity.id').onDelete('CASCADE');
            table.integer('roleID').notNullable();
            table.foreign('roleID').references('role.id');
            table.string('name').notNullable();
            table.string('jobTitle').notNullable();
            table.string('username').notNullable();
            table.string('password').notNullable();
        }),

        knex.schema.createTable('permission', function (table) {
            table.uuid('channel').notNullable();
            table.uuid('author').notNullable();
            table.foreign('author').references('user.id').onDelete('CASCADE');
            table.foreign('channel').references('channel.id').onDelete('CASCADE');
        }),

        knex.schema.createTable('post', function (table) {
            table.uuid('id').primary();
            table.uuid('channel').notNullable();
            table.foreign('channel').references('channel.id').onDelete('CASCADE');
            table.integer('state').notNullable().defaultsTo(0);
            table.integer('type').notNullable();
            table.string('title').notNullable();
            table.text('description').notNullable();
            table.string('postDate').notNullable();
            table.string('imageURL').notNullable().defaultsTo("");
            table.boolean('isImportant').notNullable().defaultsTo(false);
            table.uuid('authorID').notNullable();
            table.foreign('authorID').references('user.id');
            table.text('body', 'longtext').defaultsTo("");
            table.integer('reaction0').defaultsTo(0);
            table.integer('reaction1').defaultsTo(0);
            table.integer('reaction2').defaultsTo(0);
            table.integer('reaction3').defaultsTo(0);
            table.text('link').defaultsTo("");
            table.string('dueDate').defaultsTo("");
            table.string('attachments').defaultsTo("");
        })
    ]);
};

exports.down = function(knex, Promise) {

};
